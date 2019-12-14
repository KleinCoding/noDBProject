import React from "react";
import "../styles/Calculator.css";
import axios from "axios";
import Table from "../components/Table"

// import Table from './src/components/Table';

function Options({ options }) {
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



class Calculator extends React.Component {


  sendThatData(calories, protein, sodium, transfats, eBread, eDrink, eMeat, eSauce, eSide, eVeg){
  this.props.callbackFunc(calories, protein, sodium, transfats, eBread, eDrink, eMeat, eSauce, eSide, eVeg)
  console.log("sending that data!", calories, protein, sodium, transfats)
  
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
    };
    // this.addToFavorites = this.addToFavorites.bind(this);
    this.addCaloriesMeats = this.addCaloriesMeats.bind(this);
    this.addCaloriesBreads = this.addCaloriesBreads.bind(this);
    this.addCaloriesVegs = this.addCaloriesVegs.bind(this);
    this.addCaloriesSauces = this.addCaloriesSauces.bind(this);
    this.addCaloriesDrinks = this.addCaloriesDrinks.bind(this);
    this.addCaloriesSides = this.addCaloriesSides.bind(this);
    this.addEmUp = this.addEmUp.bind(this);
    this.restState = this.resetState.bind(this);
    this.setVals = this.setVals.bind(this);
    this.sendThatData = this.sendThatData.bind(this)
    // this.renderCalories = this.renderCalories.bind(this)

    
  }


  ///NUTRITION FUNCTIONS BELOW

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
    if (this.state.caloriesTemp >= 1) {
      this.setState({ caloriesTemp: 0 });
      this.setState({ proteinTemp: 0 });
      this.setState({ sodiumTemp: 0 });
      this.setState({ transfatsTemp: 0 });
    }
    console.log("values initialized with setVals", this.state.caloriesTemp);
    let caloriesVal = 0;
    let proteinVal = 0;
    let sodiumVal = 0;
    let transfatVal = 0;
    let caloriesTotal = 0;
  }




  resetVals() {
    if (caloriesVal >= 1) {
      let caloriesVal = 0;
    }
    return caloriesVal;
  }

  addCaloriesBreads() {
    if (this.state.selectedMeat === "Wheat") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[1].transfats);
    }
    if (this.state.selectedMeat === "White") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[2].transfats);
    }
    if (this.state.selectedMeat === "Italian Herb") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[3].transfats);
    }
    if (this.state.selectedMeat === "Flatcarboard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.breads[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.breads[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.breads[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.breads[4].transfats);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after breads -> ",
      this.state.selectedBread,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesMeats() {
    if (this.state.selectedMeat === "Ham") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[1].transfats);
    }
    if (this.state.selectedMeat === "Turkey") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[2].transfats);
    }
    if (this.state.selectedMeat === "Iguana") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[3].transfats);
    }
    if (this.state.selectedMeat === "Salami") {
      let caloriesVal = (this.state.caloriesTemp += this.state.meats[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.meats[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.meats[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.meats[4].transfats);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp calories Total var after Meat -> ",
      this.state.selectedMeat,
      caloriesTotal
    );
    // return caloriesTotal;
  }

  addCaloriesVegs() {
    if (this.state.selectedVeg === "Lettuce") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[1].transfats);
    }
    if (this.state.selectedVeg === "Spinach") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[2].transfats);

    }
    if (this.state.selectedVeg === "Bulbasaur") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[3].transfats);

    }
    if (this.state.selectedVeg == "Onion") {
      let caloriesVal = (this.state.caloriesTemp += this.state.vegs[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.vegs[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.vegs[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.vegs[4].transfats);
 
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Veg -> ",
      this.state.selectedVeg,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesSauces() {
    if (this.state.selectedSauce === "Vinaigrette") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
    }
    if (this.state.selectedSauce === "Mustard") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
    }
    if (this.state.selectedSauce === "Cream of people") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[1].transfats);
    }
    if (this.state.selectedSauce === "Mayo") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sauces[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sauces[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sauces[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sauces[4].transfats);
      
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Sauce -> ",
      this.state.selectedSauce,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesDrinks() {
    if (this.state.selectedDrink === "Coke") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[1].transfats);
      

    }
    if (this.state.selectedDrink === "Sprite") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[2].transfats);
    }
    if (this.state.selectedDrink === "Sugarjuice") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[3].transfats);
    }
    if (this.state.selectedDrink === "Salami Water") {
      let caloriesVal = (this.state.caloriesTemp += this.state.drinks[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.drinks[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.drinks[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.drinks[4].transfats);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Drink -> ",
      this.state.selectedDrink,
      caloriesTotal
    );
    return caloriesTotal;
  }

  addCaloriesSides() {
    if (this.state.selectedSide === "Chocochip") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[1].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[1].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[1].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[1].transfats);
    }
    if (this.state.selectedSide === "Macadamia nut") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[2].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[2].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[2].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[2].transfats);
    }
    if (this.state.selectedSide === "Chips") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[3].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[3].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[3].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[3].transfats);
    }
    if (this.state.selectedSide === "Death") {
      let caloriesVal = (this.state.caloriesTemp += this.state.sides[4].calories);
      let proteinVal = (this.state.proteinTemp += this.state.sides[4].protein);
      let sodiumVal = (this.state.sodiumTemp += this.state.sides[4].sodium);
      let transfatVal = (this.state.transfatTemp += this.state.sides[4].transfats);
    }
    let caloriesTotal = (this.state.caloriesTemp += caloriesVal);
    let proteinTotal = (this.state.proteinTemp += proteinVal);
    let sodiumTotal = (this.state.proteinTemp += sodiumVal);
    let transfatTotal = (this.state.transfatTemp += transfatVal);
    console.log(
      this.state.caloriesTemp,
      "< - stateCaloriesTemp caloriesTotal var after Side -> ",
      this.state.selectedSide,
      caloriesTotal
      
    );


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
  // updateAnimals(newMeats) {
  //   this.setState({ meats: newMeats });
  // }

  // addToFavorites(place) {
  //   axios.post("/api/favs", place).then(response => {
  //     this.props.updateFavorites(response.data);
  //   });
  // }


  render() {
    return (
      <div className= "calculatorHolder">
      <div className="ingredients__container">
        <h1>
          <select
            name="breads"
            className="form-control"
            onChange={e => this.setState({ selectedBread: e.target.value })}
          >
            <Options options={this.state.breads} />
          </select>
        </h1>
        <h1>
          <select
            name="meats"
            className="form-control"
            onChange={e => this.setState({ selectedMeat: e.target.value })}
          >
            <Options options={this.state.meats} />
          </select>
        </h1>
        <h2>
          <select
            name="vegs"
            className="form-control"
            onChange={e => this.setState({ selectedVeg: e.target.value })}
          >
            <Options options={this.state.vegs} />
          </select>
        </h2>
        <h3>
          <select
            name="sauces"
            className="form-control"
            onChange={e => this.setState({ selectedSauce: e.target.value })}
          >
            <Options options={this.state.sauces} />
          </select>
        </h3>
        <h4>
          <select
            name="drinks"
            className="form-control"
            onChange={e => this.setState({ selectedDrink: e.target.value })}
          >
            <Options options={this.state.drinks} />
          </select>
        </h4>
        <h5>
          <select
            name="sides"
            className="form-control"
            onChange={e => this.setState({ selectedSide: e.target.value })}
          >
            <Options options={this.state.sides} />
          </select>
        </h5>
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
            this.sendThatData(this.state.caloriesTemp, this.state.proteinTemp,
               this.state.sodiumTemp, this.state.transfatTemp,
               this.state.selectedBread, this.state.selectedDrink, this.state.selectedMeat,
               this.state.selectedSauce, this.state.selectedSide, this.state.selectedVeg)
            this.setVals();
          }}
        >
          Add Me Up!
        </button>
        <button >Pass that caloriesTemp!</button></h6>
        <div className = "tableHolder">
          <br></br> 
            <br></br>
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

export default Calculator;


