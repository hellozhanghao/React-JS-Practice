
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
                    deleted:false
                }
            ];
        case 'TOGGLE_ITEM':
            return state.map(item =>
                (item.id === action.id)
                    ? {...item, completed: !item.completed}
                    : item
            );

        // case 'DELETE_TODO':
        //     let items =[...state];
        //     items.splice(action.id,1);
        //     return items;
        default:
            return state
    }
};


export default items