let places = [

  {
    
  }
];
let favorites = [
  {

  }
];
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


module.exports = {
  addPlace,
  getPlaces,
  addToFavorites,
  getFavorites,
};
