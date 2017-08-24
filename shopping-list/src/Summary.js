import React, {Component} from 'react';

export default class Summary extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <p style={this.props.style}>
                Progress: {this.props.count} / {this.props.total}
            </p>
        )
    }

}