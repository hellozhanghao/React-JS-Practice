import { connect } from 'react-redux'
import ShoppingList from '../components/ShoppingList'
import { toggleItem } from '../actions'
import {deleteItem} from "../actions";
import {toggleEdit} from "../actions";
import {updateItem} from "../actions";


const mapStateToProps = state => {
    return {
        items: state.items.filter(t => !t.deleted)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClick: id => {
            dispatch(toggleItem(id));
        },
        onDelete: id =>{
            dispatch(deleteItem(id));
        },
        onToggleEdit: id =>{
            dispatch(toggleEdit(id))
        },
        onUpdateItem:(id,text) =>{
            dispatch(updateItem(id,text))
        }

    }
};

const VisibleShoppingList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ShoppingList);

export default VisibleShoppingList