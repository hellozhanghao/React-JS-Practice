import React from 'react'
import './App.css';

// import Footer from './Footer'
// import AddTodo from '../containers/AddTodo'
// import VisibleTodoList from '../containers/VisibleTodoList'

import Header from './containers/Header'
import InputText from './containers/InputText'
import VisibleShoppingList from './containers/VisibleShopppingList'
import Footer from './containers/Footer'



const App = () => (
    <div className="App">

        <Header/>
        <InputText/>
        <VisibleShoppingList/>
        <Footer/>


    </div>
);




export default App