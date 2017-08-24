import React, {Component} from 'react';
import Header from './Header';
import InputText from "./InputText";
import View from "./View"
import Summary from "./Summary";
import './App.css';


export default class App extends Component {
    constructor(){
        super();
        this.state={
            items:[
                {
                    name:"Orange",
                    completed:false,
                    editing:false,
                },
                {
                    name:"Apple",
                    completed:false,
                    editing:false,
                }]}
    }

    addItem = (dataFromChild) => {
        if (dataFromChild.input !==""){
            this.setState({
                items:[...this.state.items,
                    {name:dataFromChild.input,completed:false,editing:false}]})
        }
    };

    onItemUpdate = (key,event) =>{
        const value = event.target.checked;
        let {items} = this.state;
        if (value){
            items[key].completed = true;
        }else {
            items[key].completed = false;
        }
        this.setState({
            items:items
        });
    };

    onItemRemoval = (key) =>{
        let {items} = this.state;
        items.splice(key,1);
        this.setState({
            items:items
        });
        // this.render();
    };

    onEditItemClickedCallback = (key) =>{
        let {items} = this.state;
        items[key].editing = true;
        this.setState({
            items:items
        });
    };

    editItemCallback = (key,value) =>{
        let {items} = this.state;
        items[key].editing = false;
        items[key].name = value;
        this.setState({
            items:items
        });
    };

    countCompletedNumber =()=>{
        let count = 0;
        for(let i=0;i<this.state.items.length;i++){
            if (this.state.items[i].completed){
                count++
            }
        }
        return count;
    };

    render() {
        console.log(this.state.items);
        const count = this.countCompletedNumber();
        return (
            <div className="App">
                <Header
                    style={styles.header}/>
                <InputText
                    style={styles.input}
                    callbackFromParent={this.addItem}/>
                <View
                    style = {styles.view}
                    textEntryStyle = {styles.textEntry}
                    buttonStyle = {styles.button}
                    checkboxStyle = {styles.checkbox}
                    items = {this.state.items}
                    updateItemCallback = {this.onItemUpdate}
                    removeItemCallback = {this.onItemRemoval}
                    editButtonClickedCallback = {this.onEditItemClickedCallback}
                    editItemCallback = {this.editItemCallback}
                />
                <Summary
                    style = {styles.summary}
                    count = {count}
                    total = {this.state.items.length}/>
            </div>
        )
    }
}

const styles = {
    header: {
        padding: 15,
        display: 'flex',
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#115D7F",
        fontSize:"40px",
        font:""
    },
    view:{
        padding: 10,
        borderWidth: 5,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#22BAFF"
    },
    textEntry:{
        padding: 6,
        display: 'flex',
        flex:6,
        flexWrap: 'wrap'
    },
    button:{
        display: 'flex',
        flex:1,
        margin:1
    },
    checkbox:{
        display: 'flex',
        alignItems:'flex-start'
    },
    summary:{
        padding: 15,
        display: 'flex',
        flexDirection: 'row-reverse',
        backgroundColor:'#1B95CC',
        margin:'0'
    },
};
