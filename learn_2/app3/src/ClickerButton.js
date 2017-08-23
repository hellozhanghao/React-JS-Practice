import React, { Component } from 'react'
import { render } from 'react-dom'

class CounterButton extends Component {

  state = {count: 0}

  render() {
    const {count} = this.state

    return (
      <button type='button' onClick={() => this.setState({count: count + 1})}>
        Click HERE to increment: {count}
      </button>
    )
  }
}
export default CounterButton;
