import React, { Component } from 'react'
import { render } from 'react-dom'

class CounterButton extends Component {
  render() {
    const {onPress, children} = this.props
    console.log({onPress, children})

    return (
      <button type='button' onClick={onPress}>
        {children}
      </button>
    )
  }
}

class App extends Component {

  state = {count: 0}

  handlePress = () => {
    const {count} = this.state

    this.setState({count: count + 1})
  }

  render() {
    const {count} = this.state

    return (
      <CounterButton
        count={count}
        onPress={this.handlePress}
      >
        Click HERE to increment: {count}
      </CounterButton>
    )
  }
}


export default App;
