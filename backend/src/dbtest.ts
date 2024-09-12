import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.SUPABASE_USER,
  host: process.env.SUPABASE_HOST,
  database: process.env.SUPABASE_NAME,
  password: process.env.SUPABASE_PASSWORD,
  port: Number(process.env.SUPABASE_PORT),
});

pool.query("SELECT * FROM transactions", (err, res) => {
  if (err) {
    console.error("Erreur lors de la connexion à la base de données", err);
  } else {
    console.log("Connexion réussie :", res.rows);
  }
  pool.end(); // Fermer la connexion après la requête
});
