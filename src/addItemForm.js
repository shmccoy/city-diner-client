import React, { Component } from "react";
import "./addItemForm.css";

export default class AddItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      description: "",
      price: "",
      category: "",
    };

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
    this.props.addItem(this.state);
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
          <option value="Breakfast">Breakfast</option>
          <option value="Omelettes">Omelettes</option>
          <option value="Benedicts">Benedicts</option>
          <option value="Pancakes">Pancakes, French Toast and Waffles</option>
          <option value="Breakfast_Combos">Breakfast Combos</option>
          <option value="A_la_Carte">Breakfast A La Carte</option>
          <option value="Soups_and_Salads">Soups and Salads</option>
          <option value="Cold_Sandwiches">Cold Sandwiches</option>
          <option value="Hot_Sadwiches">Hot Sandwiches</option>
          <option value="Burger_and_Hot_Dogs">Burgers and Hot Dogs</option>
          <option value="Entrees">Entrees</option>
          <option value="Beverages">Beverages</option>
        </select>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
