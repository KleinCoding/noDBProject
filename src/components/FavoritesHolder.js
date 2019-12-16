import React from "react";
import "../styles/Calculator.css";
import axios from "axios";
import Table from "../components/Table"

// import Table from './src/components/Table';

function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.id}
    </option>
  ));
}
function OptionsBread({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}
function OptionsMeat({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}
function OptionsVeg({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}
function OptionsSauce({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}
function OptionsDrink({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}
function OptionsSide({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}


let caloriesVal = 0;
let proteinVal = 0;
let sodiumVal = 0;
let transfatVal = 0;
let breadSelArr= [];
let meatSelArr= [];
let vegSelArr= [];
let sauceSelArr= [];
let drinkSelArr= [];
let sideSelArr= [];
var breadSelectArr= [];
let favsArrFull= [];




class FavoritesHolder extends React.Component {


  sendThatData(calories, protein, sodium, transfats, eBread, eDrink, eMeat, eSauce, eSide, eVeg, sBA, sMA, sVA, sSA, sDA, sSAA){
  this.props.callbackFunc(calories, protein, sodium, transfats, eBread, eDrink, eMeat, eSauce, eSide, eVeg, sBA, sMA, sVA, sSA, sDA, sSAA)
  console.log("sending that data!", calories, protein, sodium, transfats, sBA, sMA, sVA, sSA, sDA, sSAA)
  
}
constructor() {
    super();

    this.state = {
      places: [],
      favorites: [],
      currentView: "places",
      meats: [],
      vegs: [],
      sauces: [],
      breads: [],
      drinks: [],
      sides: [],
      calories: 0,
      protein: 0,
      sodium: 0,
      transfats: 0,
      selectedMeat: "",
      selectedBread: "",
      selectedVeg: "",
      selectedSide: "",
      selectedDrink: "",
      selectedSauce: "",
      caloriesTemp: 0,
      proteinTemp: 0,
      sodiumTemp: 0,
      transfatTemp: 0,
      breadSelArr: [],
      reset: null,
      selectedFavorite: 0,
      favsArrFullState: [],
      updateBread:"",
      updateMeat:"",
      updateVeg:"",
      updateSauce:"",
      updateDrink:"",
      updateSide:"",
      favInput:"",
      stateCount: 0,
    };
    // this.addToFavorites = this.addToFavorites.bind(this);
    this.addCaloriesMeats = this.addCaloriesMeats.bind(this);
    this.addCaloriesBreads = this.addCaloriesBreads.bind(this);
    this.addCaloriesVegs = this.addCaloriesVegs.bind(this);
    this.addCaloriesSauces = this.addCaloriesSauces.bind(this);
    this.addCaloriesDrinks = this.addCaloriesDrinks.bind(this);
    this.addCaloriesSides = this.addCaloriesSides.bind(this);
    this.addEmUp = this.addEmUp.bind(this);
    this.resetState = this.resetState.bind(this);
    this.setVals = this.setVals.bind(this);
    this.sendThatData = this.sendThatData.bind(this)
    // this.renderCalories = this.renderCalories.bind(this)
    // this.setVal2 = this.setVal2.bind(this)
    this.resetVals = this.resetVals.bind(this)
    this.editFav = this.editFav.bind(this)

    
  }



//SENDING NUTRITION INFO AS AN ARRAY











//ARRAY SENDING ABOVE


















  ///NUTRITION FUNCTIONS BELOW


editFav(){
  axios.put('api/favs/:input', {
    body: JSON.stringify({
      input: this.state.selectedFavorite,
      bread: this.state.updateBread,
      meat: this.state.updateMeat,
      veg: this.state.updateVeg,
      sauce: this.state.updateSauce,
      drink: this.state.updateDrink,
      side: this.state.updateSide,

    }),

  }).then(response => {
          return response.json()
  }).then(json => {
    console.log("edit Fav has fun", json)
  })

}



  addEmUp() {
    this.setVals();
    this.addCaloriesBreads();
    this.addCaloriesMeats();
    this.addCaloriesVegs();
    this.addCaloriesSauces();
    this.addCaloriesDrinks();
    this.addCaloriesSides();
  }

  resetState() {
    if (this.state.calories >= 1) {
      console.log("did calories reset?");
      this.setState({ calories: 0 });
    }
  }



  setVals() {
    if (this.state.caloriesTemp >= 0) {
      this.setState({ caloriesTemp: 0 });
      this.setState({ proteinTemp: 0 });
      this.setState({ sodiumTemp: 0 });
      this.setState({ transfatTemp: 0 });
      let breadSelArr= [];
      let meatSelArr= [];
      let vegSelArr= [];
      let sauceSelArr= [];
      let drinkSelArr= [];
      let sideSelArr= [];
      let breadSelectArray = [];
    }
    console.log("values initialized with setVals", this.state.caloriesTemp);
    let caloriesVal = 0;
    let proteinVal = 0;
    let sodiumVal = 0;
    let transfatVal = 0;
    let caloriesTotal = 0;
    let breadSelArr= [];
    let meatSelArr= [];
    let vegSelArr= [];
    let sauceSelArr= [];
    let drinkSelArr= [];
    let sideSelArr= [];
    let breadSelectArr = [];
  }




  resetVals() {
    let caloriesVal = null;
    let proteinVal = null;
    let sodiumVal = null;
    let transfatVal = 0;
    let breadSelArr= null;
    let meatSelArr= null;
    let vegSelArr= null;
    let sauceSelArr= null;
    let drinkSelArr= null;
    let sideSelArr= null;
    var breadSelectArr= null;
  }

  addCaloriesBreads() {
    
    if (this.state.selectedBread === "Wheat") {
   
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[1].transfats);

      this.setState({breadSelArr: (breadSelArr.unshift(this.state.breads[1]))})
    }
    if (this.state.selectedBread === "White") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[2].transfats);
      let breadSelectArr = breadSelArr.push(this.state.breads[1].calories,this.state.breads[2].protein,this.state.breads[2].sodium, this.state.breads[2].transfats)
    }
    if (this.state.selectedBread === "Italian Herb") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[3].transfats);
      const breadSelectArr = breadSelArr.push(this.state.breads[1].calories,this.state.breads[3].protein,this.state.breads[3].sodium, this.state.breads[3].transfats)
    }
    if (this.state.selectedBread === "Flatcarboard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[4].transfats);
      let breadSelectArr = breadSelArr.push(this.state.breads[4].calories,this.state.breads[4].protein,this.state.breads[4].sodium, this.state.breads[4].transfats)
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    this.setState({breadSelArr: breadSelArr});
    // console.log(
    //   this.state.caloriesTemp,
    //   "< - stateCaloriesTemp caloriesTotal var after breads -> ",
    //   this.state.selectedBread,
    //   caloriesTotal,
    //   "bread selArr", breadSelArr, "Bread Select Arr", breadSelectArr
    // );
    return caloriesTotal;
  }

  addCaloriesMeats() {
    if (this.state.selectedMeat === "Ham") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[1].transfats);
      let meatSelArr =  this.state.meats[1]
    }
    if (this.state.selectedMeat === "Turkey") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[2].transfats);
      let meatSelArr =  this.state.meats[2]
    }
    if (this.state.selectedMeat === "Iguana") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[3].transfats);
      let meatSelArr =  this.state.meats[3]
    }
    if (this.state.selectedMeat === "Salami") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[4].transfats);
      let meatSelArr =  this.state.meats[4]
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    // console.log(
    //   // this.state.caloriesTemp,
    //   // "< - stateCaloriesTemp calories Total var after Meat -> ",
    //   // this.state.selectedMeat,
    //   // caloriesTotal
    //   this.state.proteinTemp,
    //   "< - stateproteinTemp protein Total var after Meat -> ",
    //   this.state.selectedMeat,
    //   proteinTotal
    // );
    return caloriesTotal;
    return meatSelArr
  }

  addCaloriesVegs() {
    if (this.state.selectedVeg === "Lettuce") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[1].transfats);
      let vegSelArr =  this.state.vegs[1]
    }
    if (this.state.selectedVeg === "Spinach") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[2].transfats);
      let vegSelArr =  this.state.vegs[2]

    }
    if (this.state.selectedVeg === "Bulbasaur") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[3].transfats);
      let vegSelArr =  this.state.vegs[3]

    }
    if (this.state.selectedVeg == "Onion") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[4].transfats);
      let vegSelArr =  this.state.vegs[4]
 
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    // console.log(
    //   this.state.caloriesTemp,
    //   "< - stateCaloriesTemp caloriesTotal var after Veg -> ",
    //   this.state.selectedVeg,
    //   caloriesTotal
    // );
    return caloriesTotal;
    return vegSelArr
  }

  addCaloriesSauces() {
    if (this.state.selectedSauce === "Vinaigrette") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
      let sauceSelArr =  this.state.sauces[1]
    }
    if (this.state.selectedSauce === "Mustard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
      let sauceSelArr =  this.state.sauces[2]
    }
    if (this.state.selectedSauce === "Cream of people") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
      let sauceSelArr =  this.state.sauces[3]
    }
    if (this.state.selectedSauce === "Mayo") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[4].transfats);
      let sauceSelArr =  this.state.sauces[4]
      
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    // console.log(
    //   this.state.caloriesTemp,
    //   "< - stateCaloriesTemp caloriesTotal var after Sauce -> ",
    //   this.state.selectedSauce,
    //   caloriesTotal
    // );
    return caloriesTotal;
    return sauceSelArr;
  }

  addCaloriesDrinks() {
    if (this.state.selectedDrink === "Coke") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[1].transfats);
      let drinkSelArr =  this.state.drinks[1]

    }
    if (this.state.selectedDrink === "Sprite") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[2].transfats);
      let drinkSelArr =  this.state.drinks[2]

    }
    if (this.state.selectedDrink === "Sugarjuice") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[3].transfats);
      let drinkSelArr =  this.state.drinks[3]

    }
    if (this.state.selectedDrink === "Salami Water") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[4].transfats);
      let drinkSelArr =  this.state.drinks[4]

    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    // console.log(
    //   this.state.caloriesTemp,
    //   "< - stateCaloriesTemp caloriesTotal var after Drink -> ",
    //   this.state.selectedDrink,
    //   caloriesTotal
    // );
    return caloriesTotal;
    return drinkSelArr;
  }

  addCaloriesSides() {
    if (this.state.selectedSide === "Chocochip") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[1].transfats);
      let sideSelArr =  this.state.sides[1]

    }
    if (this.state.selectedSide === "Macadamia nut") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[2].transfats);      
      let sideSelArr =  this.state.sides[2]

    }
    if (this.state.selectedSide === "Chips") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[3].transfats);
      let sideSelArr =  this.state.sides[3]

    }
    if (this.state.selectedSide === "Death") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[4].transfats);
      let sideSelArr =  this.state.sides[4]

    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    // console.log(
    //   this.state.caloriesTemp,
    //   "< - stateCaloriesTemp caloriesTotal var after Side -> ",
    //   this.state.selectedSide,
    //   caloriesTotal
      
    // );
return caloriesTotal;
return sideSelArr;

  }


  // NUTRITION FUNCTIONS ABOVE

  componentDidMount() {





    axios.get("/api/places").then(response => {
      this.setState({ places: response.data });
    });
    axios
      .get("/api/favs")
      .then(response => {
        this.setState({ favorites: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/ingredients/meat")
      .then(response => {
        this.setState({ meats: response.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get("/api/ingredients/veg")
      .then(response => {
        this.setState({ vegs: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/sauce")
      .then(response => {
        this.setState({ sauces: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/bread")
      .then(response => {
        this.setState({ breads: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/side")
      .then(response => {
        this.setState({ sides: response.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get("/api/ingredients/drink")
      .then(response => {
        this.setState({ drinks: response.data });
      })
      .catch(err => {
        console.log(err);
      });
      


  }

  setSelectState() {
    for( let i = 0; i < this.state.favorites.length; i++){
      if (this.state.favorites[i].id == this.state.selectedFavorite)
      this.setState({ 
        selectedBread: this.state.favorites[i].bread,
        selectedMeat: this.state.favorites[i].meat,
        selectedVeg: this.state.favorites[i].veg,
        selectedSauce: this.state.favorites[i].sauce,
        selectedDrink: this.state.favorites[i].drink,
        selectedSide: this.state.favorites[i].side
      }
      )
      console.log("set select state", this.state.favorites, this.state.selectedFavorite)
    }
  }
  
  





  render() {

    return (

      <div className= "calculatorHolder">
      <div className="ingredients__container">
        <h1>
          <select
            name="favoritesSelect"
            className="form-control"
            onChange={e => this.setState({ selectedFavorite: e.target.value })    
          
          }
          >
            <Options options={this.state.favorites}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="breadchange"
            className="form-control"
            onChange={e => this.setState({ updateBread: e.target.value })    } 
          
         
          >
            <OptionsBread options={this.state.breads}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="updateMeat"
            className="form-control"
            onChange={e => this.setState({ updateMeat: e.target.value })  }   
          
        //  
          >
            <OptionsMeat options={this.state.meats}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="updateVeg"
            className="form-control"
            onChange={e => this.setState({ updateVeg: e.target.value })}    
          
          
          >
            <OptionsVeg options={this.state.vegs}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="updateSauce"
            className="form-control"
            onChange={e => this.setState({ updateSauce: e.target.value }) }   
          
          
          >
            <OptionsSauce options={this.state.sauces}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="updateDrink"
            className="form-control"
            onChange={e => this.setState({ updateDrink: e.target.value })}    
          
          
          >
            <OptionsDrink options={this.state.drinks}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>
        <h1>
          <select
            name="updateSide"
            className="form-control"
            onChange={e => this.setState({ updateSide: e.target.value }) }   
          
          
          >
            <OptionsSide options={this.state.sides}
                      onChange={() => this.setSelectState()} />
          </select>
        </h1>


        </div>
        <h6 className = "buttonHolder" >
        <button
          onClick={() => {
            
            this.addCaloriesBreads();
            this.addCaloriesMeats();
            this.addCaloriesVegs();
            this.addCaloriesSauces();
            this.addCaloriesDrinks();
            this.addCaloriesSides();
            this.setSelectState()
            this.sendThatData(this.state.favsArrstate, this.state.caloriesTemp, this.state.proteinTemp,
              this.state.sodiumTemp, this.state.transfatTemp,
              this.state.selectedBread, this.state.selectedDrink, this.state.selectedMeat,
              this.state.selectedSauce, this.state.selectedSide, this.state.selectedVeg, 
              this.state.breadSelArr, meatSelArr, vegSelArr, sauceSelArr, drinkSelArr, 
              sideSelArr)  
              this.setVals();
          }}
        >
          Double-Click to Calculate!
        </button>

<input></input>
        <button onClick={() => { axios.put(`/api/favs/${this.state.selectedFavorite}`, {
              id: this.state.selectedFavorite,
              bread: this.state.updateBread,
              meat: this.state.updateMeat,
              veg: this.state.updateVeg,
              sauce: this.state.updateSauce,
              drink: this.state.updateDrink,
              side: this.state.updateSide,
            }
            )
            .catch(err => {
              console.log(err);
            });
            
            
          


        }}>Edit your favorite!</button></h6>

        <button onClick={() => {
        
            axios.delete(`/api/favs/${this.state.selectedFavorite}`)
            .catch(err => {
              console.log(err);
            });
            // this.setVals();
            
          

}}>Delete your favorite!</button>
        <div className = "tableHolder">
          <br></br> 
            <br></br>
            <br></br>


            
       {/* <h6>
         <Table 
      caloriesCalc={this.state.caloriesTemp}
      // protein={this.state.protein}
      // sodium={this.state.sodium}
      // transfats={this.state.transfats}
  
      /> 
      </h6> 
     */}
        </div>
        </div>
          

    
    );
        
 
  }
}

export default FavoritesHolder;


