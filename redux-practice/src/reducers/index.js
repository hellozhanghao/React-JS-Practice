import { combineReducers } from 'redux'
import {setPrinciple} from "../actions/index";



const todo = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return "something";
        case 'TOGGLE_TODO':
            return "other thisngs"
        default:
            return state
    }
};

const initialState =  {
    principle:1222,
    interestRate:0.0004
}

const money = (state = initialState, action) =>{
    switch (action.type){
        case "SET_PRINCIPLE":
            return {
                ...state,
                principle: action.principle,
            };
        case "SET_INTEREST_RATE":
            return {
                ...state,
                interestRate: action.rate,
            };
        default:
            return state

    }
};

// state={
//     principle:1222,
//     interestRate:0.0004
// }


// const setInterestRate = (state = 0, action) =>{
//     switch (action.type){
//         case "SET_INTEREST_RATE":
//             return action.rate;
//         default:
//             return state
//     }
// };


const reducers = combineReducers({
    money,
    todo,
});

export default reducers