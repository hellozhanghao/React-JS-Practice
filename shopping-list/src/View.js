import React, {Component} from 'react';
import './App.css';
import removeIcon from './remove-icon-png-7132-16x16.ico'

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

                        <img
                            className="css_btn_class"
                            src = {removeIcon}
                            onClick={()=>this.handleRemove(key)}
                        />
                    </li>)
                }
            </list>
        )
    }
}