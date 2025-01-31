import React from 'react'

let renderCount = 0

export default React.memo(
  function IsFive({ value }) {
    console.log(`isFive render count: ${++renderCount}`)

    const getResult = React.useMemo(() => {
      let i = 0
      while (i < 100000) i++
      return value === 5 ? 'This is five' : 'This is not five'
    }, [value])

    return <h3>{getResult}</h3>
  },
  (prevProps, nextProps) => {
    if (nextProps.value === 5) {
      return false
    } else {
      return true
    }
  },
)
