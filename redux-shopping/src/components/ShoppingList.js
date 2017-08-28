import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'


const ShoppingList = ({ items, onClick }) => (
    <ul>
        {items.map(item => (
            <Item key={item.id} {...item} onClick={() => onClick(item.id)} />
        ))}
    </ul>

);

ShoppingList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onClick: PropTypes.func.isRequired
}

export default ShoppingList