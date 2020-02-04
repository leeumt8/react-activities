import React from "react";

const name = "Liam";
const numName = 4;
const think = "is the future";
let noVowels = "";
removeVowels();

function removeVowels() {
  noVowels = name.replace(/[aeiou]/ig,'') 
}

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {numName} letters</h2>
          <h2>I think React {think}</h2>
          <h2>My name without any vowels is {noVowels}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
