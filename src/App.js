import React from 'react'
import UseState from './hooks/UseState'
import UseEffectClassComp from './hooks/UseEffectClassComp'
import UseEffectFuncComp from './hooks/UseEffectFuncComp'
import UseRef from './hooks/UseRef'
import InputFocus from './InputFocus'
import UseMemo from './hooks/useMemoReactMemo/UseMemo'
import UseCallback from './hooks/UseCallback'
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
      <UseRef />
      <h2 className="mb-5 mt-15">Input focus</h2>
      <InputFocus />
      <h2 className="mb-5 mt-15">useMemo and React.memo</h2>
      <UseMemo />
      <h2 className="mb-5 mt-15">UseCallback</h2>
      <UseCallback />
    </div>
  )
}

export default App
