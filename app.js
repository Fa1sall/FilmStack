import express from "express";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";
import indexRouter from "./routes/index.js";
import categoriesRouter from "./routes/categories.js";
import moviesRouter from "./routes/movies.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

//enable req body parsing
app.use(express.urlencoded({ extended: true }));

//set assets path
const assetPath = join(__dirname, "public");
app.use(express.static(assetPath));

//set view engine
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");

//set up routes
app.use("/", indexRouter);
app.use("/categories", categoriesRouter);
app.use("/movies", moviesRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Express App running successfully at http://localhost:${PORT}`);
});
