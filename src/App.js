import React from "react";
import Calculator from "./components/Calculator";
import axios from "axios";
import "./reset.css";
import "./styles/App.css";
// import ReactDOM from 'react-dom';

//components
import AddPlace from "./components/AddPlace";
import Table from './components/Table';



////TESTING DROP DOWNS

function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  ));
}



let caloriesVal = 0;

/// DROP DOWN TESTING ABOVE

class App extends React.Component {

// callbackFunc(calculatedCal){
//     let caloriesVal = calculatedCal;
//     return(caloriesVal)
//     console.log(caloriesVal)
//   }
  
  constructor() {
    super();
    this.state = {
      places: [],
      favorites: [  {
        id: 3,
        value: "Turkey",
        calories: 40,
        protein: 5,
        sodium: 10,
        transfats: 5,
      }],
      currentView: "places",
      meats: [],
      vegs: [],
      sauces: [],
      breads: [],
      drinks: [],
      sides: [],
      selectedMeat: "",
      selectedBread: "",
      selectedVeg: "",
      selectedSide:"",
      selectedDrink:"",
      selectedSauce:"",
      caloriesCalc:0,
      proteinCalc: 0,
      sodiumCalc: 0,
      transfatCalc: 0,
    };
    this.updatePlaces = this.updatePlaces.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
    this.callbackFunc = this.callbackFunc.bind(this);
    // this.summonArrays = this.summonArrays.bind(this);
  



  }



  callbackFunc(calories, protein, sodium, transfats, eBread, eDrink, eMeat, eSauce, eSide, eVeg){
    this.setState({
      caloriesCalc: calories,
      proteinCalc: protein,
      sodiumCalc: sodium,
      transfatsCalc: transfats,
      selectedMeat: eMeat,
      selectedBread: eBread,
      selectedVeg: eVeg,
      selectedSide: eSide,
      selectedDrink:eDrink,
      selectedSauce: eSauce,
    
    });
    console.log(this.state.caloriesCalc)
  }

//   summonArrays(bread, meat, veg, sauce, drink, side){
// this.setState({
//   meats: meat,
//   vegs: veg,
//   sauces: sauce,
//   breads: bread,
//   drinks: drink,
//   sides: side,
// })
//   }












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

  updatePlaces(newPlaces) {
    this.setState({ places: newPlaces });
  }

  updateFavorites(newFavorites) {
    this.setState({ favorites: newFavorites });
  }

 
  render() {
    return (
      <div>
        <header>
          <button onClick={() => this.setState({ currentView: "favs" })}>
            Favorites
          </button>
          <button onClick={() => this.setState({ currentView: "places" })}>
            Places
          </button>
        </header>
        <main>
          
      {/* <Ingredients summonArrays={this.summonArrays}
                      /> */}

          {this.state.currentView === "places" ? (
            <div className="app__entry">
              <Calculator
                updateFavorites={this.updateFavorites}
                places={this.state.places}
                callbackFunc={this.callbackFunc}
              />
              {/* <AddPlace updatePlaces={this.updatePlaces} /> */}
            </div>
          ) : (
            <Calculator
              showAddToFavButton={false}
              places={this.state.favorites}

            />
          )}

         
        </main>
    
        <Table 
              caloriesCalc={this.state.caloriesCalc}
              proteinCalc={this.state.proteinCalc}
              sodiumCalc={this.state.sodiumCalc}
              transfatsCalc={this.state.transfatsCalc}
              favorites={this.state.favorites}
              selectedMeat = {this.state.selectedMeat}
              selectedBread ={this.state.selectedBread}
              selectedVeg ={this.state.selectedVeg}
              selectedSide= {this.state.selectedSide}
              selectedDrink= {this.state.selectedDrink}
              selectedSauce= {this.state.selectedSauce}

              
        /> 


      </div>
    );
  }
}


//DROP DOWN MENU ABOVE IN the <h1> BRACKET
export default App;
