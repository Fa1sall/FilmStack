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

export async function deleteMovieById(movieId) {
  const query = `DELETE FROM movies where id = $1`;
  await pool.query(query, [movieId]);
}

export async function updateMovieById(
  title,
  description,
  release_year,
  poster_url,
  category_id,
  movieId
) {
  const query = `
    UPDATE movies
    SET title = $1,
    description = $2,
    release_year = $3,
    poster_url = $4,
    category_id = $5
    WHERE id = $6;`;

  await pool.query(query, [
    title,
    description,
    release_year,
    poster_url,
    category_id,
    movieId,
  ]);
}
