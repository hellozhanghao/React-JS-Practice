
const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            console.log("items:",state);
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false,
                    deleted:false,
                    editing:false
                }
            ];
        case 'TOGGLE_ITEM':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );

        case 'DELETE_ITEM':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, deleted: true}
                    : item
            );

        case 'TOGGLE_EDIT':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, editing: true}
                    : item
            );


        case "UPDATE_ITEM":
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, text: action.text, editing:false}
                    : item
            );

        default:
            return state
    }
};


export default items