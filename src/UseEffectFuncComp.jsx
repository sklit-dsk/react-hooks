import React from 'react'

/**
 * Lifecycle methods for functional components:
 * 1. componentDidMount(компонент был отображен на странице): React.useEffect(() => {}, [пустой массив])
 * 2. componentDidUpdate(в компоненте произошли изменения): React.useEffect(() => {console.log('Component updated')}, [numbers])- в массиве указывается элемент который нужно отслеживать
 * 3. componentWillUnmount(компонент будет удален): React.useEffect(() => {return () => {console.log('Component will unmount')}}, [])
 * если нужно следить за любыми изменениями внутри компонента, то массив вообще не указывается
 */

const UseEffectFuncComp = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 3, 4])

  const addNumber = () => {
    const newNumber = Math.round(Math.random() * 10) + 1
    const newArray = [...numbers, newNumber]
    setNumbers(newArray)
  }

  // conponentDidMount
  React.useEffect(() => {
    console.log('Component mounted')
  }, [])

  // conponentDidUpdate
  React.useEffect(() => {
    console.log('Component updated')
  }, [numbers])

  // conponentWillUnmount
  React.useEffect(() => {
    return () => {
      console.log('Component will unmount')
    }
  }, [])

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
export default UseEffectFuncComp
