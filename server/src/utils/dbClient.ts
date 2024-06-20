import { MongoClient, Db } from "mongodb";

class DBClient {
  public db: Db | null; // Explicitly declare the db property

  constructor() {
    this.db = null;
    // Use the promise-based approach to connect to MongoDB
    MongoClient.connect(process.env.MONGO_URL!)
      .then((client) => {
        this.db = client.db(process.env.DATABASE!);
        console.log("DB connected");
      })
      .catch((err) => {
        console.error(err); // Corrected typo from 'error' to 'err'
      });
  }

  isAlive(): boolean {
    return !!this.db;
  }
}

const dbClient = new DBClient();
export default dbClient;
