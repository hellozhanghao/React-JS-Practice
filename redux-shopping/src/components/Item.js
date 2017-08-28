import React from 'react'
import PropTypes from 'prop-types'
import editIcon from '../edit-icon-png-3602-16x16.ico'
import removeIcon from '../remove-icon-png-7132-16x16.ico'


const Item = ({ onClick, completed, text, onDelete, onToggleEdit}) => (
    <li
        style={{
            textDecoration: completed ? 'line-through' : 'none',
            padding: 10,
            borderWidth: 5,
            display:'flex',
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:"#22BAFF",
            margin:0
        }}
    >

        <input
            type="checkbox"
            style={styles.checkbox}
            checked={completed}
            onClick={onClick}/>

        <div
            style = {styles.textEntry}>
            {text}
        </div>

        <img
            className="css_btn_class"
            src = {editIcon}
            alt="delete-icon"
            onClick={onToggleEdit}
        />

        <img
            className="css_btn_class"
            src = {removeIcon}
            alt="delete-icon"
            onClick={onDelete}
        />

    </li>


);

Item.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleEdit :PropTypes.func.isRequired,

};

export default Item

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