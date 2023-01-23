import React, { useEffect, useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({API, calculateTotal, countPlates, money}) {

  const [sushi, setSushi] = useState([])
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(4)

useEffect(()=>{
  fetch(API)
  .then((resp) => resp.json())
  .then((sushi) => setSushi(sushi))
})

function handleMoreSushi(){
  setStart((start)=> start+=4);
  setEnd((end)=> end+=4);
}

  return (
    <div className="belt">
      {sushi.slice(start,end).map((piece)=>{
        return <Sushi key={piece.id} piece={piece} countPlates={countPlates} money={money} calculateTotal={calculateTotal}/>
      })}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
