import React from "react";
import "../styles/PlacesView.css";
import axios from "axios";




function Options({ options }) {
  return options.map(option => (
    <option key={option.id} value={option.value} object={option}>
      {option.value}
    </option>
  ));
}

class PlacesView extends React.Component {
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
    this.addToFavorites = this.addToFavorites.bind(this);
    this.addCalories = this.addCalories.bind(this)
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
  updateAnimals(newMeats) {
    this.setState({ meats: newMeats });
  }

  addToFavorites(place) {
    axios.post("/api/favs", place).then(response => {
      this.props.updateFavorites(response.data);
    });
  }

  
  addCalories() {
    console.log(this.state.meats)
     if (this.state.selectedMeat == "Ham"){
       console.log('did calories go up?')
       this.setState({calories: this.state.meats[1].calories})
       }
       
     }

  render() {
    return (
      <div className="ingredients__container">
            <h1>
          <select name="breads" className="form-control" onChange={(e) => this.setState({selectedBread: e.target.value})}>
            <Options options={this.state.breads} />
          </select>
        </h1>
        <h1>
          <select name="meats" className="form-control" onChange={(e) => this.setState({selectedMeat: e.target.value})}>
            <Options options={this.state.meats} />
          </select>
        </h1>
        <h2>
          <select name="vegs" className="form-control"onChange={(e) => this.setState({selectedVeg: e.target.value})}>
            <Options options={this.state.vegs} />
          </select>
        </h2>
        <h3>
          <select name="sauces" className="form-control" onChange={(e) => this.setState({selectedSauce: e.target.value})}>
            <Options options={this.state.sauces} />
          </select>
        </h3>
        <h4>
          <select name="drinks" className="form-control" onChange={(e) => this.setState({selectedDrink: e.target.value})}>
            <Options options={this.state.drinks} />
          </select>
        </h4>
        <h5>
          <select name="sides" className="form-control" onChange={(e) => this.setState({selectedSide: e.target.value})}>
            <Options options={this.state.sides} />
          </select>
        </h5>
        <button onClick={this.addCalories} >Add Me Up!</button>
      </div>
    );
  }
}

export default PlacesView;
