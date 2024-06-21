import { MongoClient, Db, ObjectId } from "mongodb";
import { BaseDocument } from "../interfaces/BaseDocument";



class DBClient {
  public db: Db | null; // Explicitly declare the db property

  constructor() {
    this.db = null;
    // Use the promise-based approach to connect to MongoDB
    MongoClient.connect(process.env.MONGO_URL!)
      .then((client) => {
        this.db = client.db(process.env.DATABASE!);
        console.log("DB connected");
        // you can create collections here if you want or you can create them on the fly, it's up to you
        // what does mean on the fly? it means that you can create a collection when you want to insert a document, if the collection does not exist, MongoDB will create it for you
      })
      .catch((err) => {
        console.error(err); // Corrected typo from 'error' to 'err'
      });
  }

  isAlive(): boolean {
    return !!this.db;
  }

  // Add a method to get the collection
  async getCollection(collection: string) {
    return this.db!.collection(collection);
  }

  // Add a method to get a document by ID
  async getDocumentById<T extends BaseDocument>(
    collection: string,
    id: string
  ): Promise<T | null> {
    const getCol = await this.getCollection(collection);
    return getCol.findOne({ _id: new ObjectId(id) }) as Promise<T | null>;
  }

  async getDocumentByField<T extends BaseDocument>(
    collection: string,
    field: string,
    value: string
  ): Promise<T | null> {
    const getCol = await this.getCollection(collection);
    return getCol.findOne({ [field]: value }) as Promise<T | null>;
  }

  async insertDocument<T extends BaseDocument>(
    collection: string,
    document: T
  ): Promise<T> {
    const getCol = await this.getCollection(collection);
    const result = await getCol.insertOne(document);
    return { ...document, _id: result.insertedId } as T;
  }

  async updateDocument<T extends BaseDocument>(
    collection: string,
    id: string,
    document: T
  ): Promise<T | null> {
    const getCol = await this.getCollection(collection);
    await getCol.updateOne({ _id: new ObjectId(id) }, { $set: document });
    return this.getDocumentById(collection, id);
  }

  async deleteDocument<T extends BaseDocument>(
    collection: string,
    id: string
  ): Promise<boolean> {
    const getCol = await this.getCollection(collection);
    const result = await getCol.deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
  }

  async listDocuments<T extends BaseDocument>(
    collection: string
  ): Promise<T[]> {
    const getCol = await this.getCollection(collection);
    return getCol.find().toArray() as Promise<T[]>;
  }

  async deleteAllDocuments(collection: string): Promise<boolean> {
    const getCol = await this.getCollection(collection);
    const result = await getCol.deleteMany({});
    return result.deletedCount! > 0;
  }
}

const dbClient = new DBClient();
export default dbClient;