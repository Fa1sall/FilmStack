import pool from "../db/pool.js";

export async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

export async function getMoviesByCategory(category) {
  const query = `
    SELECT movies.*, categories.name AS genre
    FROM movies
    JOIN categories ON movies.category_id = categories.id
    WHERE categories.name ILIKE $1;
  `;
  const { rows } = await pool.query(query, [category]);
  return rows;
}
