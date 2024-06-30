// import express, {Request, Response} from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import helmet from 'helmet';
// import morgan from 'morgan';
// import dotenv from 'dotenv';
// import dbClient from "./utils/dbClient";
// import authRoute from "./routes/authRoute";

// dotenv.config();

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(helmet()); // secure your app by setting various HTTP headers
// // app.use(morgan('dev')); // log every request to the console
// // Custom format example
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
// app.use(
//   cors({
//     origin: "http://localhost:5173", // allow all origins
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// // connect to the database
// // console.log(dbClient.isAlive() ? "DB connection successful" : "DB connection failed");

// // basic route
// app.get("/", (req: Request, res: Response) => {
//   res.json({ message: "Welcome to Influencer Marketing API" });
// });

// app.use("/api/auth", authRoute)

// // export our app
// export default app;
