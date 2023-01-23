import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = `http://localhost:3001/sushis/`;

function App() {

  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

   function calculateTotal(price){
    if(money>0 && price<=money){
      setMoney((money) => money - price)
    }
  }

  function countPlates(piecesEaten, price){
    if(money>0 && price<=money){
    setPlates([...plates, piecesEaten])
    }
  }
 
  return (
    <div className="app">
      <SushiContainer API={API} calculateTotal={calculateTotal} countPlates={countPlates} money={money}/>
      <Table money={money} plates={plates}/>
    </div>
  );
}

export default App;
