import express from "express";
import { getAllCategories, getMoviesByCategory } from "../models/categories.js";

const categoriesRouter = express.Router();

const categoryImages = {
  Action: "/images/action.png",
  Comedy: "/images/comedy.png",
  Drama: "/images/drama.png",
  Romance: "/images/romance.png",
  "Sci-Fi": "/images/sci-fi.png",
  Horror: "/images/horror.png",
};

categoriesRouter.get("/", async (req, res) => {
  const categoriesArray = await getAllCategories();
  const categories = categoriesArray.map((category) => ({
    id: category.id,
    name: category.name,
    url: categoryImages[category.name],
  }));
  res.render("categories", { categories });
});

categoriesRouter.get("/:type", async (req, res) => {
  const { type } = req.params;
  const categoryMovies = await getMoviesByCategory(type);
  console.log(categoryMovies);
  res.render("categoryPage", { categoryMovies });
});

export default categoriesRouter;
