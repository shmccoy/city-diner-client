import React, { useState } from 'react'
import ItemTable from './itemtable'
import AddItemForm from './addItemForm'
import Content from './content'




const Dashboard = () => {
    const itemData = [
        { id: 1, name: '2 Eggs with Bacon', description: 'Served with your choice of toast or biscuit.', price: '5.50', category: 'Breakfast' },
        { id: 2, name: '2 Eggs with Link Sausage', description: 'Served with your choice of toast or biscuit.', price: '5.95', category: 'Breakfast' },
        { id: 3, name: 'Breakfast Club', description: 'Fried egg, bacon, ham, American cheese, lettuce and tomato on your choice of toast with home fries or chips.', price: '7.50', category: 'Breakfast' },
    ]

    const [item, setItem] = useState(itemData)
  
    const addItem = item => {
      item.id = item.length + 1
      setItem([...item, item])
    }
              
    return (
      <Content>
        <h1>Menu Editor</h1>  
        <div className="container">
            <div className="flex-row">
              <div className="flex-large">
                <h2>Add items</h2>
                <AddItemForm addItem={addItem} />
              </div>
              <div className="flex-large">
                <h2>View items</h2>
                <ItemTable item={item} />
              </div>
            </div>
        </div>
    
      </Content>
    )
}
    

export default Dashboard
