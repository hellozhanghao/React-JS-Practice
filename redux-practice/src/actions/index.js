export const setInterestRate = rate =>{
    return{
        type: "SET_INTEREST_RATE",
        rate
    }
};
export const setPrinciple = principle =>{
    return{
        type:"SET_PRINCIPLE",
        principle
    }
};