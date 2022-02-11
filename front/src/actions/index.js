import axios from 'axios';

export function signUpUser (payload) {
    return async function (dispatch) {
        var user = await axios.post('http://localhost:3001/session/signUp', payload)
        return dispatch({
            type: 'SIGN_UP_USER',
            payload: user
        })
    }
}

export function localSignIn(payload) {
    return async function (dispatch) {
        var userSignIn = await axios.post('http://localhost:3001/session/localsignin', payload)
        return dispatch({
            type: 'LOCAL_SIGN_IN',
            payload: userSignIn
        })
    }
}