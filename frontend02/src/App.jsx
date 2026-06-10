import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 5)}>Jump by 5</button>
      <button onClick={()=>  setCount(count+2)}> jump by 2</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
    
  )
}

export default App