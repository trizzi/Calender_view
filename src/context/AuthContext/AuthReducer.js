// A reducer is where we specify the app state changes in response to certain actions to our store/context
// create a new state with the changes and then send it
export default (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                currentUser: action.payload,
            };

        case 'LOGIN_ERROR':
            return {
                ...state,
                errors: action.payload,
            };

        case 'PASSWORD_RESET_SUCCESS':
            return {
                ...state,
                response: action.payload,
            };

        case 'PASSWORD_RESET_ERROR':
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
};
