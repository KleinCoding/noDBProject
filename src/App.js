import React from "react";
import PlacesView from "./components/PlacesView";
import axios from "axios";
import "./reset.css";
import "./styles/App.css";
// import ReactDOM from 'react-dom';

//components
import AddPlace from "./components/AddPlace";
import Table from './components/Table';

//TOTAL POINTS - 62;

////TESTING DROP DOWNS

function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value}>
      {option.value}
    </option>
  ));
}


// function calculateNutrition(){
//   if (this.state.selectedMeat === 'Ham'){
//   this.setState(this.state.calories = this.state.calories + this.state.meats[0].calories)
//   }
//   console.log('did calories go up?')
// }

/// DROP DOWN TESTING ABOVE

class App extends React.Component {
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
      selectedSide:"",
      selectedDrink:"",
      selectedSauce:"",
    };
    this.updatePlaces = this.updatePlaces.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
    // this.addCalories = this.addCalories.bind(this)
  }



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
          {this.state.currentView === "places" ? (
            <div className="app__entry">
              <PlacesView
                updateFavorites={this.updateFavorites}
                places={this.state.places}
              />
              {/* <AddPlace updatePlaces={this.updatePlaces} /> */}
            </div>
          ) : (
            <PlacesView
              showAddToFavButton={false}
              places={this.state.favorites}
            />
          )}

         
        </main>
    
        <Table 
              calories={this.state.calories}
              protein={this.state.protein}
              sodium={this.state.sodium}
              transfats={this.state.transfats}

              
        />

      </div>
    );
  }
}


//DROP DOWN MENU ABOVE IN the <h1> BRACKET
export default App;
