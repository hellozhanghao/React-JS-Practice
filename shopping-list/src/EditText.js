import React, {Component} from 'react';
import './App.css';


export default class EditText extends Component{
    constructor(props){
        super(props);
        this.state = {
            input:this.props.old,
        }
    }

    handleClick = () => {
        const {input} =  this.state;
        this.props.editItemCallback(this.props.id, input);
        // console.log(this.props);
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
            <div style={styles.container}>
                <input
                    className="textin"
                    style={styles.input}
                    type="text"
                    placeholder="Edit your item"
                    value={input}
                    onChange={this.handleTextChange}/>
                <button
                    style={styles.button}
                    className="css_btn_class"
                    onClick={this.handleClick}>
                    Save
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

    },
    container: {
        padding: 5,
        borderWidth: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'#22BAFF',
    },
};