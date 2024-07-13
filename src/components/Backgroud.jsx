/* eslint-disable no-unused-vars */
import { useState } from "react";


function Backgroud() {
  const [color, setColor] = useState('red');
  function ChangeColor() {
    setColor('blue');
  }
  return (
    <>
      <button onClick={ChangeColor}> Change </button>
      <div className="box" style={{backgroundColor: color}}></div>
   </>
  )
}

export default Backgroud;
