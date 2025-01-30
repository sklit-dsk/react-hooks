import React from 'react'
import UseState from './UseState'
import UseEffectClassComp from './UseEffectClassComp'
import UseEffectFuncComp from './UseEffectFuncComp'
import 'macro-css'

function App() {
  const [visibleList, setVisibleList] = React.useState(true)
  const [visibleList2, setVisibleList2] = React.useState(true)
  const toggleList = () => {
    setVisibleList((visibleList) => !visibleList)
  }
  const toggleList2 = () => {
    setVisibleList2((visibleList2) => !visibleList2)
  }
  return (
    <div className="d-flex flex-column align-center">
      <h1 className="mb-5 mt-10">React Hooks</h1>
      <h2 className="mb-5 mt-5">useState</h2>
      <UseState />
      <h2 className="mb-5 mt-15">useEffect(class component)</h2>
      {visibleList && <UseEffectClassComp />}
      <button onClick={toggleList}>Toggle list</button>
      <h2 className="mb-5 mt-15">useEffect(function component)</h2>
      {visibleList2 && <UseEffectFuncComp />}
      <button onClick={toggleList2}>Toggle list</button>
      <h2 className="mb-5 mt-15">useRef</h2>
    </div>
  )
}

export default App
