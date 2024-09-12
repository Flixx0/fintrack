import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/transactions";
import { Pool } from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.use(express.json());

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

app.use(logger);

app.use("/api", userRoutes);

app.get("/ping", (req: Request, res: Response) => {
  res.send("pong");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
