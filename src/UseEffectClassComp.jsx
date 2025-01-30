import React from 'react'

/**
 * Lifecycle methods:
 * 1. constructor
 * 2. componentDidMount(компонент был отображен на странице)
 * 3. componentDidUpdate(в компоненте произошли изменения)
 * 4. componentWillUnmount(компонент будет удален)
 */

class UseEffectClassComp extends React.Component {
  state = {
    numbers: [1, 2, 3, 4],
  }

  addRandomNumber = () => {
    const newNumber = Math.round(Math.random() * 10) + 1
    this.setState({ numbers: [...this.state.numbers, newNumber] })
  }

  componentDidMount() {
    console.log('Component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps, prevState, this.props, this.state)
    if (this.state.numbers.length !== prevState.numbers.length) {
      console.log('Component updated')
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount')
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.numbers.map((num, index) => (
            <li key={index}>{num}</li>
          ))}
        </ul>
        <button onClick={this.addRandomNumber}>New number</button>
      </div>
    )
  }
}

export default UseEffectClassComp
