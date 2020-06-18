import React, { Component } from "react";
import config from "./config";
import "./menu.css";

export default class Menu extends Component {
  state = {
    Breakfast: [],
    Omelettes: [],
    Breakfast_Combos: [],
    Benedicts: [],
    Pancakes: [],
    A_la_Carte: [],
    Soup_and_Salads: [],
    Cold_Sandwich: [],
    Hot_Sandwich: [],
    Burger_and_Hot_Dogs: [],
    Entrees: [],
    Beverages: [],
  };

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/api/menu/menu/breakfast`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/omelettes`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/breakfast_combos`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/benedicts`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/pancakes`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/a_la_carte`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/soup_and_salads`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/cold_sandwich`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/hot_sandwich`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/burger_and_hot_dogs`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/entrees`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/beverages`),
    ])
      .then((responses) => Promise.all(responses.map((res) => res.json())))
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
      <div className="Menu">
        <h1>Menu</h1>
        <img
          className="menu-img"
          src="https://scontent.fric1-1.fna.fbcdn.net/v/t31.0-8/277760_123702727724802_6363994_o.jpg?_nc_cat=102&_nc_sid=9267fe&_nc_ohc=rPHeWTcnsTYAX_SNxjH&_nc_ht=scontent.fric1-1.fna&oh=073eae3d076a9e61e59159019a15b9d2&oe=5F109887"
          alt="Diner Menu"
        />
        <h2>Menu</h2>
        <h3>Breakfast</h3>
        {this.state.Breakfast.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Omelettes</h3>
        {this.state.Omelettes.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Breakfast Combos</h3>
        {this.state.Breakfast_Combos.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Benedicts</h3>
        {this.state.Benedicts.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Pancakes</h3>
        {this.state.Pancakes.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>A la Carte</h3>
        {this.state.A_la_Carte.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Soup and Salads</h3>
        {this.state.Soup_and_Salads.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Cold Sandwich</h3>
        {this.state.Cold_Sandwich.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Hot Sandwich</h3>
        {this.state.Hot_Sandwich.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Burgers and Hot Dogs</h3>
        {this.state.Burger_and_Hot_Dogs.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Entrees</h3>
        {this.state.Entrees.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h3>Beverages</h3>
        {this.state.Beverages.map((item) => (
          <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
