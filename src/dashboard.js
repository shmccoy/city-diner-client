import React, { useState, Fragment, useEffect } from "react";
import config from "./config";
import ItemTable from "./itemtable";
import AddItemForm from "./addItemForm";
import EditItemForm from "./editItemForm";

export default class Dashboard extends Component {
  state = { data: [],};

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/api/menu/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
      });
  }, []);
  

  const [items, setItems] = useState(data);
  const [currentItem, setCurrentItem] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    category: "",
  });
  const [editing, setEditing] = useState(false);

  const addItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  };

  const deleteItem = (id) => {
    setEditing(false);

    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (id, updateditem) => {
    setEditing(false);

    setItems(items.map((item) => (item.id === id ? updateditem : item)));
  };

  const editRow = (item) => {
    setEditing(true);

    setCurrentItem({
      id: item.id,
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category,
    });
  };

  return (
    <div>
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
    </div>
  );
};


