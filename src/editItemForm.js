import React, { Component } from "react";
import config from "../config";

export default class EditItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.currentItem;

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handlePriceChange(event) {
    this.setState({ price: event.target.value });
  }

  handleCategoryChange(event) {
    this.setState({ category: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateItem(this.state.id, this.state);
    fetch(`${config.API_ENDPOINT}/api/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        ([
          Breakfast,
          Omelettes,
          Breakfast_Combos,
          Benedicts,
          Pancakes,
          A_la_Carte,
          Soup_and_Salads,
          Cold_Sandwich,
          Hot_Sandwich,
          Burger_and_Hot_Dogs,
          Entrees,
          Beverages,
        ]) => {
          this.setState({
            Breakfast: Breakfast,
            Omelettes: Omelettes,
            Breakfast_Combos: Breakfast_Combos,
            Benedicts: Benedicts,
            Pancakes: Pancakes,
            A_la_carte: A_la_Carte,
            Soup_and_Salads: Soup_and_Salads,
            Cold_Sandwich: Cold_Sandwich,
            Hot_Sandwich: Hot_Sandwich,
            Burger_and_Hot_Dogs: Burger_and_Hot_Dogs,
            Entrees: Entrees,
            Beverages: Beverages,
          });
        }
      );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.handleNameChange(e)}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          rows="4"
          cols="50"
          name="description"
          value={this.state.description}
          onChange={(e) => this.handleDescriptionChange(e)}
        />
        <br />
        <label>Price</label>
        <br />
        <input
          type="text"
          name="price"
          value={this.state.price}
          onChange={(e) => this.handlePriceChange(e)}
        />
        <br />
        <label>Category</label>
        <br />
        <select
          id="category"
          name="category"
          value={this.state.category}
          onChange={(e) => this.handleCategoryChange(e)}
        >
          <option value="breakfast">Breakfast</option>
          <option value="omelets">Omelets</option>
          <option value="breakfast combos">Breakfast Combos</option>
          <option value="benedicts">Benedicts</option>
          <option value="pancakes">Pancakes, French Toast and Waffles</option>
          <option value="a la carte">Breakfast A La Carte</option>
          <option value="soups and salads">Soups and Salads</option>
          <option value="cold sandwiches">Cold Sandwiches</option>
          <option value="hot sadwiches">Hot Sandwiches</option>
          <option value="burger and hot dogs">Burgers and Hot Dogs</option>
          <option value="entrees">Entrees</option>
          <option value="beverages">Beverages</option>
        </select>
        <br />
        <button>Update Item</button>
        <button
          onClick={() => this.props.setEditing(false)}
          className="button muted-button"
        >
          Cancel
        </button>
      </form>
    );
  }
}
