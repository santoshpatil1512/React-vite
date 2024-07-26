
import { useState } from 'react'

function Counter() {
const [count, setCount] = useState(1)

const addValue = () => {
  if (count < 20) {
  setCount(count + 1)
  }
}

const removeValue = () => {
  if (count > 0) {
    setCount(count - 1)
    }}
  
return (
    <>
      <h1>good</h1>
      <h2>Counter value : </h2>

      <button onClick={addValue}>add value: {count}</button>
      <br />
      <button onClick={removeValue}>add value: {count}</button>

      <footer>footer : {count}</footer>
      
    </>
  )
}

export default Counter