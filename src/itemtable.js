import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ItemTable = (props) => (
  <Table>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Description</Th>
        <Th>Price</Th>
        <Th>Category</Th>
        <Th>Actions</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.item.length > 0 ? (
        props.item.map((item) => (
          <Tr key={item.id}>
            <Td>{item.name}</Td>
            <Td>{item.description}</Td>
            <Td>{item.price}</Td>
            <Td>{item.category}</Td>
            <Td>
              <button
                onClick={(e) => {
                  props.editRow(item);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={(e) => props.deleteItem(item.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </Td>
          </Tr>
        ))
      ) : (
        <Tr>
          <Td colSpan={3}>No items</Td>
        </Tr>
      )}
    </Tbody>
  </Table>
);

export default ItemTable;
