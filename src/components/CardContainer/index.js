import React from "react";
import Card from "../Card";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="jumbotron card-container">
      <Card image={props.image}/>
    </div>
  );
}

export default CardContainer;
