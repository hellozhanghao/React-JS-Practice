import React, { Component } from 'react';
import Input from "./containers/Input";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <h> Welcome!</h>
            <Input type="principle"/>
            <Input type="rate"/>
            <Input type="year"/>
        </div>


    );
  }
}

export default App;
