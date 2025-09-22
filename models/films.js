import pool from "../db/pool.js";

export async function getAllMovies() {
  const query = `
    SELECT movies.*, categories.name AS genre
    FROM movies
    JOIN categories ON movies.category_id = categories.id;
  `;
  const { rows } = await pool.query(query);
  return rows;
}

export async function getMovieById(movieId) {
  const query = `
  SELECT movies.*, categories.name AS genre
  FROM movies
  JOIN categories ON movies.category_id = categories.id
  WHERE movies.id = $1;
  `;
  const { rows } = await pool.query(query, [movieId]);
  return rows[0];
}

export async function createMovie(
  title,
  description,
  release_year,
  poster_url,
  category_id
) {
  const query = `
  INSERT INTO movies(title,description,release_year,poster_url,category_id)
  VALUES ($1,$2,$3,$4,$5);
  `;
  await pool.query(query, [
    title,
    description,
    release_year,
    poster_url,
    category_id,
  ]);
}
