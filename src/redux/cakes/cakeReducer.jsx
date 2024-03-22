import { BUY_CAKE, RETURN_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes: 10,
    numOfReturnedCakes: 0
}

const cakeReducer = (state = initialState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case RETURN_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        default: return state
    }
}
export default cakeReducer