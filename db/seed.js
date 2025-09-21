import { promises as fs } from "fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pool from "./pool.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function seed() {
  console.log("Seeding....");

  try {
    const schemaPath = join(__dirname, "seeds", "schema.sql");
    const seedPath = join(__dirname, "seeds", "seed.sql");

    const schema = await fs.readFile(schemaPath, "utf-8");
    const seedDB = await fs.readFile(seedPath, "utf-8");

    await pool.query(schema);
    await pool.query(seedDB);

    console.log("Seeding completed successfully...");
  } catch (err) {
    console.log("Error seeding DB: ", err);
  } finally {
    await pool.end();
  }
}

seed();
