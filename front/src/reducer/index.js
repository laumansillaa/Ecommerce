const initialState = {
    user: [],
    posts: [],
    detail: []
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
        case 'USER_DATA':
            return {
                ...state,
                user: action.payload
            }
        case 'ALL_POST':
            return  {
                ...state,
                posts: action.payload
            }
        case 'POST_DETAIL':
            return {
                ...state,
                detail: action.payload
            }
        default: 
            return state
    }
}


export default rootReducer;