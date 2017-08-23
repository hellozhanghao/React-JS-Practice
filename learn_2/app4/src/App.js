import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Box extends Component{
  constructor(props){
    super(props)

  }

  render(){
    // {color,number} = {this.props};
    console.log(this.props);
    const style ={
      width:"80px",
      height:"100px",
      border:"1px",
      backgroundColor: this.props.color,
      display:"flex",
      flex: this.props.flex || 1,
      flexDirection:"row",
      justifyContent: "center",
      alignItems:"center",
    }

    return(
      <div style={style} >Rectangle {this.props.number}</div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style = {{backgroundColor: '#f0f', flex: 1}}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div style ={styles.boxes}>
          <Box color="#93B874" number='1'  flex={2}></Box>
          <Box color="#435834" number='2' flex={4}></Box>
          <Box color="#939826" number='3'  flex={2}></Box>
          <Box color="#936874" number='4'  flex={0}></Box>

          {/* <CounterButton></CounterButton> */}
        </div>
      </div>
    );
  }
}

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

const styles={
  boxes:{
    backgroundColor: '#ff0',
    display:"flex",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    flexWrap: "wrap",
    padding:"10px",

  }
}




export default App;
