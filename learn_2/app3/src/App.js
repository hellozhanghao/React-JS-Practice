import React, { Component } from 'react'
import { render } from 'react-dom'

const data = [
  {name: 'Devin'},
  {name: 'Gabe' },
  {name: 'Kim'},
];

class List extends Component {
  render() {
    return (
      <div>
        {data.map((item, index) => <div key={index}>{item.name}</div>)}
      </div>
    )
  }
}


export default List
