import Redux from 'redux'

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const defaultState = {
    authenticated: false,
    token: '',
    refresh: '',
}

const login = (token, refresh) => {
    return {
        type: LOGIN,
        authenticated: true,
        token,
        refresh,
    }
}

const logout = () => {
    return {
        type: LOGOUT,
        authenticated: false,
        token: '',
        refresh: '',
    }
}

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN:
            return login()
        case LOGOUT:
            return logout()
        default:
            return state
    }
}

const store = Redux.createStore(authReducer)