import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <h1 style={this.props.style}>My Shopping List</h1>
        )
    }
}