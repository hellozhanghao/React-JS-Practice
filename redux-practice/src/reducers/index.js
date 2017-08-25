import { combineReducers } from 'redux'



const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return "something";
        case 'TOGGLE_TODO':
            return "other thisngs"
        default:
            return state
    }
};

const setValue = (value= 0, action) =>{
    switch (action.type){
        case "SET_PRINCIPLE":
        case "SET_INTEREST_RATE":
            return action.interestRate

    }
}


const reducers = combineReducers({
    todos,
    visibilityFilter
});

export default reducers