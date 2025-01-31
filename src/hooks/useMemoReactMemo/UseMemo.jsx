import React from 'react'
import Count from './Count'
import IsFive from './isFive'

function UseMemo() {
  const [count, setCount] = React.useState(0)
  const [count2, setCount2] = React.useState(0)

  return (
    <div>
      <h5>Counter 1: </h5>
      <div className="counter">
        <button onClick={() => setCount(count + 1)}>+</button>
        <Count id={1} value={count} />
      </div>
      <h5>Counter 2: </h5>
      <div className="counter">
        <button onClick={() => setCount2(count2 + 1)}>+</button>
        <Count id={2} value={count2} />
        <IsFive value={count2} />
      </div>
    </div>
  )
}
export default UseMemo
