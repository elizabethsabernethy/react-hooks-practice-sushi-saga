import React, { useState } from "react";

function Sushi({piece, calculateTotal, countPlates, money}) {

  const[eaten, setEaten] = useState(false)
  const[piecesEaten, setPiecesEaten] = useState(0)

  const price = piece.price;

function eatSushi(){
  if(!eaten){
    setEaten((eaten) => !eaten)
    setPiecesEaten((piecesEaten) => piecesEaten+=1)
  }
}

function handleEatSushi(){
  eatSushi();
  calculateTotal(price);
  countPlates(piecesEaten, price);
}

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {eaten && money>0 && price<=money ? null : (
          <img
            src={piece.img_url}
            alt={piece.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {piece.name} - ${piece.price}
      </h4>
    </div>
  );
}

export default Sushi;
