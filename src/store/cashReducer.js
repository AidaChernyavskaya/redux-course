const defaultState = {
    cash: 0,
}

export const cashReducer = (state = defaultState, action) => {
    switch(action.type){
        case 'ADD_CASH':
            return {...action, cash: state.cash + action.payload}
        case 'GET_CASH':
            return {...action, cash: state.cash - action.payload}
        default:
            return state
    }
}