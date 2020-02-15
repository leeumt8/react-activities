import React, { useContext } from "react";
import Card from "../Card";
import "./style.css";
import UserContext from "../../utils/UserContext";

const CardContainer = () => {
  const user = useContext(UserContext);
  return (
    <div className="jumbotron card-container">
      <Card
        title={user.title}
        image={user.image}
        language={user.language}
        onClick={() => user.onClick()}
      />
    </div>
  );
}

export default CardContainer;
