import React, { Component } from 'react'
import { render } from 'react-dom'

const data = [
  {id: 'a', name: 'Devin'},
  {id: 'b', name: 'Gabe' },
  {id: 'c', name: 'Kim'},
];

class List extends Component {
  render() {
    return (
      <div>
        {data.map(item => <div key={item.id}>{item.name}</div>)}
      </div>
    )
  }
}

export default List
