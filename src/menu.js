import React, { Component } from "react";
import Content from "./content";
import "./menu.css";

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Breakfast: [
        {
          item: "Best Breakfast",
          description:
            "Three eggs, served with your choice of bacon, sausage or bologna and your choice of home fries, fried apples or grits and a short stack.",
          price: "$7.50",
        },
      ],
      Omelets: [
        {
          item: "Californian Omelet",
          description:
            "Eggs beaters, chicken, cheddar, tomatoes, broccoli and sour cream.",
          price: "$8.75",
        },
      ],
      Benedicts: [
        {
          item: "New York Benedict",
          description:
            "Two poached eggs served over grilled pastrami on a toasted English muffin. Served with fries, fried apples or grits.",
          price: "$8.75",
        },
      ],
    };
  }

  render() {
    return (
      <viv className="Menu">
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
        <h3>Omlets</h3>
        {this.state.Omelets.map((item) => (
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
      </viv>
    );
  }
}
