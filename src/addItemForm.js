import React, { useState } from 'react'

const AddItemForm = props => {
  const initialFormState = { id: null, name: '', description: '', price: '', category: '' }
  const [item, setItem] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setItem({ ...item, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!item.name || !item.description || !item.price || !item.category ) return

        props.addItem(item)
        setItem(initialFormState)
      }}
    >
      <label>Name</label><br />
      <input type="text" name="name" value={item.name} onChange={handleInputChange} /><br />
      <label>Description</label><br />
      <textarea rows="4" cols="50" name="description" value={item.description} onChange={handleInputChange} /><br />
      <label>Price</label><br />
      <input type="text" name="username" value={item.price} onChange={handleInputChange} /><br />
      <label>Category</label><br />
      <select id="category" name="category" value={item.category} onChange={handleInputChange}>
        <option value="breakfast">Breakfast</option>
        <option value="omelets">Omelets</option>
        <option value="benedicts">Benedicts</option>
        <option value="pancakes">Pancakes, French Toast and Waffles</option>
        <option value="a la carte">Breakfast A La Carte</option>
        <option value="soups and salads">Soups and Salads</option>
        <option value="cold sandwiches">Cold Sandwiches</option>
        <option value="hot sadwiches">Hot Sandwiches</option>
        <option value="burger and hot dogs">Burgers and Hot Dogs</option>
        <option value= "entrees">Entrees</option>
        <option value="beverages">Beverages</option>
      </select><br />
      <button>Add new item</button>
    </form>
  )
}

export default AddItemForm