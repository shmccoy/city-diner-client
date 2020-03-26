import React, { Component } from 'react'
import Content from './content'
import './menu.css'

export default class Menu extends Component {

  state = {
    'Breakfast': {
      item: 'Best Breakfast',
      description: 'Three eggs, served with your choice of bacon, sausage or bologna and your choice of home fries, fried apples or grits and a short stack.',
      price: '$7.50'
    },
    'Omelets': {
      item: 'Californian Omelet',
      description: 'Eggs beaters, chicken, cheddar, tomatoes, broccoli and sour cream.',
      price: '$8.75'
    },
    'Benedicts': {
      item: 'New York Benedict',
      description: 'Two poached eggs served over grilled pastrami on a toasted English muffin. Served with fries, fried apples or grits.',
      price: '$8.75'
    }

    
  };

  render() {
    return (
      <Content className='Menu'>
        <h2>Menu</h2>

        <h3>Breakfast</h3>

        <h3>Omlets</h3>

        <h3></h3>
        
      </Content>
    )
  }
}