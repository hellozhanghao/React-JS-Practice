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
                    completed:false
                },
                {
                    name:"Apple",
                    completed:false
                }]}
    }

    addItem = (dataFromChild) => {
        if (dataFromChild.input !==""){
            this.setState({
                items:[...this.state.items,
                    {name:dataFromChild.input,completed:false}]})
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
        this.render();
    };


    countCompleted =()=>{
        let count = 0;
        for(let i=0;i<this.state.items.length;i++){
            if (this.state.items[i].completed){
                count++
            }
        }
        return count;
    };


    render() {
        console.log(this.state.items)
        const count = this.countCompleted();
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
                    removeItemCallback = {this.onItemRemoval}/>
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
    input: {
        padding: 15,
        borderWidth: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor:'#6ED2FF',
    },
    view:{
        padding: 10,
        borderWidth: 5,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#22BAFF"
    },

    textEntry:{
        padding: 5,
        display: 'flex',
        flex:6,
        flexWrap: 'wrap'
    },
    button:{
        display: 'flex',
        flex:1,
        margin:2
    },
    checkbox:{
        display: 'flex',
        flex:1,
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
