let places = [];
let favorites = [];
function addPlace(req, res) {
  places.push(req.body);
  res.status(200).json(places);
}
function getPlaces(req, res) {
  res.status(200).json(places);
}
function addToFavorites(req, res) {
  favorites.push(req.body);
  res.status(200).json(favorites);
}

function getFavorites(req, res) {
  res.status(200).json(favorites);
}
function editFavs(req, res) {
  const { id } = req.body;
  const { bread } = req.body;
  const { meat } = req.body;
  const { veg } = req.body;
  const { sauce } = req.body;
  const { drink } = req.body;
  const { side } = req.body;
  const i = favorites.findIndex(element => element.id == id);

  favorites[i].bread = bread;
  favorites[i].meat = meat;
  favorites[i].veg = veg;
  favorites[i].sauce = sauce;
  favorites[i].drink = drink;
  favorites[i].side = side;
  res.status(200).json(favorites);
  console.log("favs API edit complete, favs =", favorites);
  // this.setState({stateCount: this.state.statecount++})
}

function deleteFavs(req, res) {
  console.log(favorites)
  const input = +req.params.input;
  console.log("Delete function deleting input id->", input);
  let favindex = favorites.findIndex(fav => fav.id === input);
  console.log("favindex", favindex);

  favorites.splice(favindex, 1)


res.status(200).json(favorites);

}

module.exports = {
  addPlace,
  getPlaces,
  addToFavorites,
  getFavorites,
  deleteFavs,
  editFavs
};
