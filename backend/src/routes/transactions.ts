import { Router, Request, Response } from "express";

import { Pool } from "pg";
import dotenv from "dotenv";

type TransactionPost = {
  name: string;
  value: number;
};

dotenv.config();

const router = Router();

const pool = new Pool({
  user: process.env.SUPABASE_USER,
  host: process.env.SUPABASE_HOST,
  database: process.env.SUPABASE_NAME,
  password: process.env.SUPABASE_PASSWORD,
  port: Number(process.env.SUPABASE_PORT),
});

router.get("/transactions", async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM transactions");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(`ERROR: Cannot get users \n ${err}`);
  }
});

router.post(
  "/transaction",
  async (req: Request<TransactionPost>, res: Response) => {
    try {
      const { name, value } = req.body;
      if (!name || !value) {
        throw new Error("name and value are required");
      }
      const result = await pool.query(
        "INSERT INTO transactions (name, value) VALUES ($1, $2) RETURNING *",
        [name, value]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send("ERROR: Cannot add transaction");
    }
  }
);

export default router;
