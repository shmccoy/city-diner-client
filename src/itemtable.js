import React from 'react'


const ItemTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.item.length > 0 ? (
        props.item.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>{item.category}</td>
            <td>
              <button onClick={(e) => {
                  props.editRow(item)
                }} className="button muted-button">Edit</button>
              <button onClick={(e) => props.deleteItem(item.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No items</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default ItemTable