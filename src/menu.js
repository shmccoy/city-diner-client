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
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Breakfast`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Omelettes`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Breakfast_Combos`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Benedicts`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Pancakes`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/A_la_Carte`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Soup_and_Salads`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Cold_Sandwich`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Hot_Sandwich`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Burger_and_Hot_Dogs`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Entrees`),
      fetch(`${config.API_ENDPOINT}/api/menu/menu/Beverages`),
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
        <h2>Breakfast</h2>
        {this.state.Breakfast.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Omelettes</h2>
        {this.state.Omelettes.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Breakfast Combos</h2>
        {this.state.Breakfast_Combos.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Benedicts</h2>
        {this.state.Benedicts.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Pancakes</h2>
        {this.state.Pancakes.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>A la Carte</h2>
        {this.state.A_la_Carte.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Soup and Salads</h2>
        {this.state.Soup_and_Salads.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Cold Sandwich</h2>
        {this.state.Cold_Sandwich.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Hot Sandwich</h2>
        {this.state.Hot_Sandwich.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Burgers and Hot Dogs</h2>
        {this.state.Burger_and_Hot_Dogs.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Entrees</h2>
        {this.state.Entrees.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
        <h2>Beverages</h2>
        {this.state.Beverages.map((item) => (
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}
