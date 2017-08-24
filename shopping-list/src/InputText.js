import React, {Component} from 'react';
import './App.css';


export default class InputText extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:"",
        }
    }

    handleClick = () => {
        const {input} =  this.state;
        this.props.callbackFromParent({input});
        this.setState({input:""});
    };

    handleTextChange = (event) =>{
        const newValue = event.target.value;
        if(newValue.length<=30){
            this.setState({input:newValue});
        }
    };

    render(){
        let {input} = this.state;
        return(
            <div style={this.props.style}>
                <input
                    className="textin"
                    style={styles.input}
                    type="text"
                    placeholder="Enter your next item"
                    value={input}
                    onChange={this.handleTextChange}/>
                <button
                    style={styles.button}
                    className="css_btn_class"
                    onClick={this.handleClick}>
                    Add
                </button>
            </div>

        )
    }
}



const styles = {
    input:{
        display:"flex",
        flex: 7,
        margin:5,
    },
    button:{
        display:"flex",
        flex: 1,
        justifyContent:'center',
        margin:2,

    }
}