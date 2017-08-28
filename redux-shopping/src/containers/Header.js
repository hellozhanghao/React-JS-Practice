import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <h1 style={style.header}>My Shopping List</h1>
        )
    }
}

const style = {
    header: {
        padding: 15,
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#115D7F",
        fontSize:"40px",
        font:"",
        margin:0
    }
};