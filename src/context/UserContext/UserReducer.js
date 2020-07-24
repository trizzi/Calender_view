// A reducer is where we specify the app state changes in response to certain actions to our store/context
// Create a new state with the changes and send it
export default (state, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case 'USER_ERROR':
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
};
