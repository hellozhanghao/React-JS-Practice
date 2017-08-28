import React from 'react'
import './App.css';

// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

import Header from './containers/Header'
import InputText from './containers/InputText'
import VisibleShoppingList from './containers/VisibleShopppingList'



const App = () => (
    <div>
        {/*<AddTodo />*/}
        {/*<VisibleTodoList />*/}
        {/*<Footer />*/}
        <Header style = {style.header}/>
        <InputText/>
        <VisibleShoppingList/>


    </div>
);


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
        font:""
    }
};

export default App