const meats = [
  {
    id: 1,
    value: " Choose Your Food!",

  },
  {
    id: 2,
    value: "Ham",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 3,
    value: "Turkey",
    calories: 40,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Iguana",
    calories: 130,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Salami",
    calories: 10,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }
];
const vegs = [
  {
    id: 1,
    value: " Choose Your Food!"
  },
  {
    id: 2,
    value: "Lettuce",
    calories: 10,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 3,
    value: "Spinach",
    calories: 10,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Bulbasaur",
    calories: 10,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Onion",
    calories: 10,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }
];

const sauces = [
  {
    id: 1,
    value: " Choose Your Food!"
  },
  {
    id: 2,
    value: "Vinaigrette",
    calories: 1,
    protein: 10,
    sodium: 10,
    transfats: 10,

  },
  {
    id: 3,
    value: "Mustard",
    calories: 1,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Cream of people",
    calories: 1,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Mayo",
    calories: 1,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }
];

const breads = [
  {
    id: 1,
    value: " Choose Your Food!"
  },
  {
    id: 2,
    value: "Wheat",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 3,
    value: "White",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Italian Herb",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Flatcarboard",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }
];

const sides = [
  {
    id: 1,
    value: " Choose Your Food!"
  },
  {
    id: 2,
    value: "Chocochip",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 3,
    value: "Macadamia nut",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Chips",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Death",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }
];

const drinks = [
  {
    id: 1,
    value: " Choose Your Food!"
  },
  {
    id: 2,
    value: "Coke",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 3,
    value: "Sprite",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 4,
    value: "Sugarjuice",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  },
  {
    id: 5,
    value: "Salami Water",
    calories: 100,
    protein: 10,
    sodium: 10,
    transfats: 10,
  }


];


var favs = [];

let id= 1

function getMeat(req, res) {
  res.status(200).json(meats);
}

function getVeg(req, res) {
  res.status(200).json(vegs);
}

function getSauce(req, res) {
  res.status(200).json(sauces);
}

function getBread(req, res) {
  res.status(200).json(breads);
}

function getSide(req, res) {
  res.status(200).json(sides);
}

function getDrink(req, res) {
  res.status(200).json(drinks);
}

function getFavs(req, res) {
  res.status(200).json(favs);
}

function addFavs(req, res) {
  let fav = {
    id: id,
    bread: bread,
    meat: meat,
    veg: veg,
    sauce: sauce,
    drink: drink,
    side: side,
  }
  favs.push(fav)
  id++
  console.log("pushing fav to fav array", fav)
  req.status(200).json(favs)
}

let caloriesVal = 0;
let proteinVal = 0;
let sodiumVal = 0;
let transfatsVal = 0;

module.exports = {
  getMeat,
  getVeg,
  getSauce,
  getBread,
  getSide,
  getDrink,
  caloriesVal,
  proteinVal,
  sodiumVal,
  transfatsVal,
  getFavs,
  addFavs
};