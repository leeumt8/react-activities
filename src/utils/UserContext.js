import React from "react";

const UserContext = React.createContext({
    title: "",
    image: "",
    language: "",
    /*handleBtnClick: {handleBtnClick}*/
    onClick: () => undefined
});

export default UserContext;