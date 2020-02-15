import React, { useReducer } from "react";

function Count() {
  const dogs = [
    {
      name: "Harry",
      image: "https://images.dog.ceo/breeds/vizsla/n02100583_10960.jpg"
    },
    {
      name: "Hermione",
      image: "https://images.dog.ceo/breeds/husky/n02110185_1511.jpg"
    }
  ];
  /* const [count, dispatch] = useReducer((state,action) => {
    if(action === "praise") {
      return state + 1
    }
  }, 0); */

  function reducer(state, action) {
    switch (action) {
      case "goodHarry":
        return {...state, HarryGoods: state.HarryGoods + 1}
      case "goodHermione":
        return {...state, HermioneGoods: state.HermioneGoods + 1}
      default:
        throw new Error()
    }
  }

  const [state,dispatch] = useReducer(reducer, {
    HarryGoods: 0,
    HermioneGoods: 0
  })

  return (
    <div className="App">
      <div className="row mt-5">
        {dogs.map(item => (
          <div key={item.name} className="card mx-auto col-4">
            <img className="card-img-top" src={item.image} alt={item.name} />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.name} has been praised {state[item.name + "Goods"]} times!</p>
              <button className="btn btn-primary" onClick={() => dispatch(`good${item.name}`)}>Praise</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Count;
