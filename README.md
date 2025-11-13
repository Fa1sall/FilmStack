# 🎬 FilmStack

**FilmStack** is a movie management web application built with **Node.js**, **Express**, **EJS**, and **PostgreSQL**.  
It allows users to browse, add, edit, and delete movies, view detailed movie pages, and explore films by category.  
The project was created as part of learning backend CRUD operations with Express and PostgreSQL while integrating EJS for dynamic server-side rendering.

## Features

- View all movies from the database
- Add new movies with title, description, release year, poster, and category
- Edit and delete existing movies
- View detailed movie pages with metadata (genre, release year, description)
- Browse films by category (Action, Comedy, Drama, Romance, Sci-Fi, Horror)

## Screenshots

### Home Page

![Home Page](public/screenshots/home.png)

### All Movies

![All Movies](public/screenshots/films.png)

### Add Movie Form

![Add Movie](public/screenshots/add-films.png)

### Categories

![Categories](public/screenshots/categories.png)

### Movie Page

![Movie Page](public/screenshots/film.png)

## 🛠️ Tech Stack

- **Frontend:** EJS (Templating Engine), CSS
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL

## 📁 Project Structure

```
FilmStack/
├── app.js              # Main Express application file
│
├── db/
│ ├── pool.js           # PostgreSQL connection setup
│ ├── seed.js           # Script to populate the database
│ └── seeds/
│ ├── schema.sql        # Database schema (tables, relationships)
│ └── seed.sql          # Initial data for movies and categories
│
├── models/
│ ├── categories.js     # Category model and queries
│ └── films.js          # Film model (CRUD operations)
│
├── routes/
│ ├── index.js          # Home route
│ ├── movies.js         # Movie CRUD routes
│ └── categories.js     # Category routes
│
├── views/
│ ├── categories.ejs    # Displays all categories
│ ├── categoryPage.ejs  # Movies by selected category
│ ├── createMovies.ejs  # Add movie form
│ ├── editMovie.ejs     # Edit movie form
│ ├── index.ejs         # Home page
│ ├── moviePage.ejs     # Movie details page
│ ├── movies.ejs        # All movies list
│ └── partials/
│ └── navbar.ejs        # Navigation bar
│
├── public/ # assets
│ ├── images/
│ ├── js/
│ │ └── navbar.js       # Navbar functionality
│ └── styles/
│ ├── reset.css         # Base style reset
│ └── styles.css        # Main styling file
│
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation

```

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/Fa1sall/FilmStack.git
cd FilmStack
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a .env file

```bash
DATABASE_URL="postgresql://username:password@host:port/database_name"
```

### 4. Populate the DB

```bash
node db/seed.js
```

### 5. Start the development server

```bash
npm start
```
