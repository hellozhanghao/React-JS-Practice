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

