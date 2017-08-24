import React, { Component } from 'react';
import './App.css';
import Input from './Input'
import logo from './logo.svg';


class Line extends Component {

  state = {
    first : '',
    second: '',
    result: '',
  };

  handleSubmit = (e)=>{
    e.preventDefault();
    console.log("Called");
  };


  handleChange1 =(event) =>{
    const {first} = this.state;
    console.log(event.target.value);
    console.log(this.props);
    this.setState({first:event.target.value});
    this.setState({result:event.target.value*this.state.second})
  };

  handleChange2 =(event) =>{
    const {second} = this.state;
    console.log(event.target.value);
    this.setState({second:event.target.value});
    this.setState({result:event.target.value*this.state.first})
  };

  render() {
    return (

      <div style={styles.app}>
        <div style={styles.rowElements}>
          <form>
          <input
            type='number'
            placeholder='first'
            value = {this.state.first}
            onChange = {this.handleChange1}></input>
              x
          <input
            type='number'
            placeholder='second'
            value = {this.state.second}
            onChange = {this.handleChange2}></input>
            = {this.state.result}
          <input
            type='submit'
            onClick = {this.handleSubmit}
            value="submit">

          </input>
          </form>
        </div>

      <div style={styles.rowElements}>
        <form>
        <input
          type='number'
          placeholder='first'
          value = {this.state.first}
          onChange = {this.handleChange1}></input>
            x
        <input
          type='number'
          placeholder='second'
          value = {this.state.second}
          onChange = {this.handleChange2}></input>
          = {this.state.result}
      </form>
      </div>

      <div style = {styles.images}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" /> */}



      </div>


    </div>
    )
  }
}

const styles = {
  rowElements: {
    flex:1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:12,
    width: 500,
    height: 100,
    backgroundColor: 'lightblue'
  },
  app:{
    flex:1,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  images:{
    flex:1,
    flexDirection:'column',
    justifyContent: 'flex-star',
    alignItems:'space-between'
  }

};

export default Line
