// import {setPrinciple} from "../actions/index";
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import React,{Component} from 'react';

// const TextInput = ({type,dispatch}) =>{
//     return (
//         <div>
//             {type}
//             {dispatch}
//         </div>
//     )
// };

class TextInput extends Component{
    render(){
        return(
            <div>
                <p>{this.props.type}</p>
                <input type="number"/>
                <button onClick={() => {
                    this.props.setPrinciple(3);
                }}>principle {this.props.todo}</button>
                {/*{console.log(this.props.dispatch(setPrinciple(3)))}*/}
            </div>
        )
    }
}


export default connect((state) => ({
        todo2: state.todo2,
        money: state.money,
    }),
    (dispatch) => (
    bindActionCreators(Actions, dispatch)
))(TextInput)