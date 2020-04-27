import React, { useState, Fragment } from 'react'
import ItemTable from './itemtable'
import AddItemForm from './addItemForm'
import EditItemForm from './editItemForm'
import Content from './content'




const Dashboard = () => {
    const itemData = [
        { id: 1, name: '2 Eggs with Bacon', description: 'Served with your choice of toast or biscuit.', price: '5.50', category: 'Breakfast' },
        { id: 2, name: '2 Eggs with Link Sausage', description: 'Served with your choice of toast or biscuit.', price: '5.95', category: 'Breakfast' },
        { id: 3, name: 'Breakfast Club', description: 'Fried egg, bacon, ham, American cheese, lettuce and tomato on your choice of toast with home fries or chips.', price: '7.50', category: 'Breakfast' },
    ]

    const [items, setItems] = useState(itemData)
    const [ currentItem, setCurrentItem ] = useState({id: null, name: '', description: '', price: '', category: '' })
	  const [ editing, setEditing ] = useState(false)
  
    const addItem = item => {
      item.id = items.length + 1
      setItems([...items, item])
    }

    const deleteItem = id => {
      setEditing(false)
  
      setItems(items.filter(item => item.id !== id))
    }
  
    const updateItem = (id, updateditem) => {
      setEditing(false)
  
      setItems(items.map(item => (item.id === id ? updateditem : item)))
    }
  
    const editRow = item => {
      setEditing(true)
  
      setCurrentItem({ id: item.id, name: item.name, description: item.description, price: item.price, category: item.category })
    }
              
    return (
      <Content>
        <h1>Menu Editor</h1>  
        <div className="container">
            <div className="flex-row">
              <div className="flex-large">
              {editing ? (
						<Fragment>
							<h2>Edit item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
                <h2>Add items</h2>
                <AddItemForm addItem={addItem} />
            </Fragment>
					)}    
              </div>
              <div className="flex-large">
                <h2>View items</h2>
                <ItemTable item={items} editRow={editRow} deleteItem={deleteItem} />
              </div>
            </div>
        </div>
    
      </Content>
    )
}
    

export default Dashboard
