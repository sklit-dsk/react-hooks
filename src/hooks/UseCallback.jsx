import React from 'react'

export default function UseCallback() {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5])
  const ulRef = React.useRef()
  const timerRef = React.useRef()

  const addNumber = () => {
    setNumbers((prev) => [...prev, prev[prev.length - 1] + 1])
  }

  const start = () => {
    timerRef.current = setInterval(addNumber, 1000)
  }

  const stop = () => {
    clearInterval(timerRef.current)
  }
  const handleScroll = () => {
    console.log('Scrolling...')
  }

  React.useEffect(() => {
    console.log(ulRef)
    ulRef.current.addEventListener('scroll', handleScroll)
  }, [numbers])

  return (
    <div>
      <ul ref={ulRef}>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <button onClick={addNumber}>New number</button>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
      </div>
    </div>
  )
}
