import { connect } from 'react-redux'
// import TodoList from '../components/TodoList'
import ShoppingList from '../components/ShoppingList'
import { toggleItem } from '../actions'




const mapStateToProps = state => {
    return {
        items: state.items.filter(t => !t.deleted)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(toggleItem(id))
        }
    }
};

const VisibleShoppingList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingList);

export default VisibleShoppingList