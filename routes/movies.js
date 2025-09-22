import express from "express";
import {
  createMovie,
  getAllMovies,
  getMovieById,
  deleteMovieById,
  updateMovieById,
} from "../models/films.js";
import { getAllCategories } from "../models/categories.js";

const moviesRouter = express.Router();

moviesRouter.get("/", async (req, res) => {
  const movies = await getAllMovies();
  res.render("movies", { movies });
});

moviesRouter.get("/create", async (req, res) => {
  const categories = await getAllCategories();
  res.render("createMovies", { categories });
});

moviesRouter.post("/create", async (req, res) => {
  const { title, description, release_year, poster_url, category_id } =
    req.body;
  await createMovie(title, description, release_year, poster_url, category_id);
  res.redirect("/movies");
});

moviesRouter.post("/:id/delete", async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).send("Invalid movie ID");
  }
  await deleteMovieById(id);
  res.redirect("/movies");
});

moviesRouter.get("/:id/edit", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).send("Invalid movie ID");
  }

  const movie = await getMovieById(id);
  const categories = await getAllCategories();

  if (!movie) {
    return res.status(404).send("Movie not found");
  }

  res.render("editMovie", { movie, categories });
});

moviesRouter.post("/:id/edit", async (req, res) => {
  const { title, description, release_year, poster_url, category_id } =
    req.body;
  const movieId = req.params.id;

  await updateMovieById(
    title,
    description,
    release_year,
    poster_url,
    category_id,
    movieId
  );
  res.redirect(`/movies/${movieId}`);
});

moviesRouter.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10);

  if (isNaN(id)) {
    return res.status(400).send("Invalid movie ID");
  }

  const movie = await getMovieById(id);

  if (!movie) {
    return res.status(404).send("Movie not found");
  }

  res.render("moviePage", { movie });
});

export default moviesRouter;
