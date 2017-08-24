import React, {Component} from 'react';

export default class Header extends Component{
    render(){
        return(
            <title style={this.props.style}>My Shopping List</title>
        )
    }
}