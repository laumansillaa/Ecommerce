const initialState = {
    user: []
}


function rootReducer (state = initialState, action) {
    switch(action.type) {
        case 'SIGN_UP_USER':
            return {
                ...state,
                user: action.payload
            }
        case 'LOCAL_SIGN_IN':
            return {
                ...state,
                user: action.payload
            }
        default: 
            return state
    }
}


export default rootReducer;