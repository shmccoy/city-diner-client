import React, { useState, Fragment, useEffect } from "react";
import config from "./config";
import ItemTable from "./itemtable";
import AddItemForm from "./addItemForm";
import EditItemForm from "./editItemForm";
import "./dashboard.css";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/api/menu`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setItems(res);
      });
  }, [editing]);

  const [currentItem, setCurrentItem] = useState({
    id: null,
    name: "",
    description: "",
    price: "",
    category: "",
  });

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
    const updatedItemIndex = items.findIndex((item) => item.id === id);

    setItems((prev) => {
      return [...prev].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...updateditem,
          };
        }

        return item;
      });
    });
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
          <div id="list" className="flex-large">
            <h2>View items</h2>
            <ItemTable item={items} editRow={editRow} deleteItem={deleteItem} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
