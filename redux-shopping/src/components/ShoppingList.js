import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import '../App.css'
import UpdateText from '../containers/UpdateText'




const ShoppingList = ({ items, onClick, onDelete, onToggleEdit }) => (
    <list className="unstyledList"
        style={{

            margin:0
        }}>
        {items.map(item => (
            <div key={item.id} >
                <Item
                    {...item}
                    onClick={() => onClick(item.id)}
                    onDelete = {() => onDelete(item.id)}
                    onToggleEdit={() => onToggleEdit(item.id)}
                />
                {item.editing?
                    <div>
                        <UpdateText id={item.id}/>
                    </div>:""}
            </div>

        ))}
    </list>

);

ShoppingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleEdit :PropTypes.func.isRequired,
}

export default ShoppingList

const styles = {
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
}