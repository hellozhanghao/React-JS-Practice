let itemID = 0
export const addItem = text => {
    return {
        type: 'ADD_ITEM',
        id: itemID++,
        text
    }
};



export const toggleItem = id => {
    return {
        type: 'TOGGLE_ITEM',
        id
    }
};

export const deleteItem = id => {
    return {
        type: 'DELETE_ITEM',
        id
    }
};


export const toggleEdit = id => {
    return{
        type: 'TOGGLE_EDIT',
        id
    }
};

export const updateItem = (id,text) =>{
    return{
        type: "UPDATE_ITEM",
        id,
        text
    }
}

