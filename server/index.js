const express = require("express");
const app = express();
//controller functions
const {
  addPlace,
  getPlaces,
  addToFavorites,
  getFavorites,
  editFavs,
  deleteFavs
} = require("./controller");

const {
  getMeat,
  getVeg,
  getBread,
  getSauce,
  getDrink,
  getSide,
  getFavs,
  addFavs,
} = require("./ingredients.js");


app.use(express.json());

app.post("/api/places", addPlace);
app.get("/api/places", getPlaces);
app.post("/api/favs", addToFavorites);
app.get("/api/favs", getFavorites);



app.put("/api/favs/:input", editFavs);
app.delete("/api/favs/:input", deleteFavs);


app.get("/api/ingredients/meat", getMeat);
app.get("/api/ingredients/veg", getVeg);
app.get("/api/ingredients/sauce", getSauce);
app.get("/api/ingredients/bread", getBread);
app.get("/api/ingredients/side", getSide);
app.get("/api/ingredients/drink", getDrink);


// app.get("/api/favorites", getFavs);

// app.post("/api/favorites", addFavs);












app.listen(5050, () => console.log(`Listening on Port 5050`));