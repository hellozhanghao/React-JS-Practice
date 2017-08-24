import React, {Component} from 'react';
import './App.css';

export default class List extends Component{

    handleChange = (key, event) =>{
        this.props.updateItemCallback(key,event);
    };

    handleRemove = (key) =>{
        this.props.removeItemCallback(key);
    };

    render(){
        return(
            <list >
                {this.props.items.map((item,key) =>
                    <li style={this.props.style}
                        key={key} >
                        <input
                            key = {key}
                            style={this.props.checkboxStyle}
                            type="checkbox"
                            checked={item.completed}
                            onClick={(evt) => this.handleChange(key, evt)}/>

                        <div
                            className={item.completed ? "strike":""}
                            style={this.props.textEntryStyle}>
                            {item.name}
                        </div>

                        <input
                            className="css_btn_class"
                            style={this.props.buttonStyle}
                            type="submit"
                            value="Remove"
                            onClick={()=>this.handleRemove(key)}/>
                    </li>)
                }
            </list>
        )
    }
}