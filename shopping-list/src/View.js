import React, {Component} from 'react';
import './App.css';
import removeIcon from './remove-icon-png-7132-16x16.ico'
import editIcon from './edit-icon-png-3602-16x16.ico'
import EditText from "./EditText";

export default class List extends Component{
    editItemCallback = (key, newValue) =>{
        this.props.editItemCallback(key,newValue);
    };
    render(){
        return(
            <list >
                {this.props.items.map((item,key) =>
                    <div key={key}>
                        <li className="unstyledList">
                            <div style={this.props.style}>
                                <input
                                    key = {key}
                                    style={this.props.checkboxStyle}
                                    type="checkbox"
                                    checked={item.completed}
                                    onClick={(evt) => this.props.updateItemCallback(key,evt)}/>

                                <div
                                    className={item.completed ? "strike":""}
                                    style={this.props.textEntryStyle}>
                                    {item.name}
                                </div>

                                <img
                                    className="css_btn_class"
                                    src = {editIcon}
                                    alt="delete-icon"
                                    onClick={()=> this.props.editButtonClickedCallback(key)}
                                />
                                <img
                                    className="css_btn_class"
                                    src = {removeIcon}
                                    alt="delete-icon"
                                    onClick={()=>this.props.removeItemCallback(key)}
                                />
                            </div>
                        </li>

                        {item.editing?
                            <div>
                                <EditText
                                    id = {key}
                                    old = {item.name}
                                    editItemCallback = {this.editItemCallback}
                                />
                            </div>:""}
                    </div>
                    )
                }
            </list>
        )
    }
}