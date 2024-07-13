/* eslint-disable no-unused-vars */
import { useState } from "react";

function Condition() {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('hi...')

  if (sent) {
    return (
      <>
        <h2> Your Message is on the way </h2>
      </>
    )
  }
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        setSent(true)
      }}>
        <textarea placeholder="Enter Message" value={message} onChange={(e) => {
          setMessage(e.target.value)
        }}> </textarea>
       <button> Send </button>
      </form>
  </>
  )
}

export default Condition;


