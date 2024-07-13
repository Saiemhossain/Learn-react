/* eslint-disable no-unused-vars */
import { useState } from "react";

function CountBtn() {
  const [count, setCount] = useState(0);
  function Counthandle() {
    setCount(count + 1);
  }
  return (
    <>
      <button onClick={Counthandle}> Add Count {count} </button>
   </>
  )
}

export default CountBtn;
