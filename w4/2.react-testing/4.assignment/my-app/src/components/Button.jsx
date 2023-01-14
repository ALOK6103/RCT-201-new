import React from 'react'
import { useState } from 'react'
const Button = () => {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1 data-testid="value">{count}</h1>
        <button data-testid="inc" onClick={()=>setCount(count+5)}>Add</button>
        <button data-testid="dec" onClick={()=>setCount(count-5)}>Reduce</button>
    </div>
  )
}

export default Button