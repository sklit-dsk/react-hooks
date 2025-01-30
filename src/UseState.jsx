import React from 'react'

/**
 * A React component that manages a list of numbers using the useState hook.
 *
 * The component displays a list of numbers and a button. When the button is clicked,
 * a new random number between 1 and 10 is generated and added to the list.
 *
 * returns {JSX.Element} A JSX element containing a list of numbers and a button
 * to add a new number to the list.
 */

function UseState() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4])

  const addNumber = () => {
    const newNumber = Math.round(Math.random() * 10) + 1
    setNumbers([...numbers, newNumber])
  }

  return (
    <div>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>New number</button>
    </div>
  )
}

export default UseState
