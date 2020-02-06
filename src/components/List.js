import React from "react";

function List(props) {
  const listItems = props.groceries.map(grocery => (
    <li className="list-group-item" key={grocery.id}>{grocery.name}</li>
  ))
  return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
}

export default List;
