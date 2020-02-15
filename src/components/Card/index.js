import React, { useContext } from "react";
import CardBody from "../CardBody";
import CardBtn from "../CardBtn";
import CardImg from "../CardImage";
import CardHeading from "../CardHeading";
import "./style.css";
import UserContext from "../../utils/UserContext";

const Card = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <CardHeading title={user.title} />
      <CardImg image={user.image} />
      <CardBody language={user.language} />
      {!user.imageimage && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: user.imageimage ? 1 : 0 }}
        onClick={user.handleBtnClick}
        data-value="back"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={userhandleBtnClick}
        data-value="next"
      />
    </div>
  );
}

export default Card;
