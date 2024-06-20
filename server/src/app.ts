import express, {Request, Response} from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import dbClient from "./utils/dbClient";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet()); // secure your app by setting various HTTP headers
app.use(morgan('dev')); // log every request to the console
app.use(
  cors({
    origin: "*", // allow all origins
  })
);

// connect to the database
// console.log(dbClient.isAlive() ? "DB connection successful" : "DB connection failed");

// basic route
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Influencer Marketing API" });
});

// export our app
export default app;
