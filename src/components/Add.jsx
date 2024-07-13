import { useState } from "react";


function Add() {
  const [number, setNumber] = useState(10);
  return (
    <>
      <h2> {number} </h2>
      <button onClick={() => {
        // update the from the last
        setNumber(()=> number+1)
        setNumber(()=> number+1)
        setNumber(() => number + 4)

        // state with the update
        // setNumber((v) => v+1)
        // setNumber((v) => v+1)
        // setNumber((v) => v+1)
        
       
      }}> ADD Number </button>
 </>
  )
}

export default Add;
