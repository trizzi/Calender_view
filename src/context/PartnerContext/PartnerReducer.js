// A reducer is where we specify the app state changes in response to certain actions to our store/context
// Create a new state with the changes and send it
export default (state, action) => {
    switch (action.type) {
        case 'GET_PARTNERS':
            return {
                ...state,
                partners: action.payload,
            };
        case 'DELETE_PARTNER':
            return {
                ...state,
                partners: state.partners.filter(
                    (partner) => partner.id !== action.payload
                ),
            };
        case 'ADD_PARTNER':
            return {
                ...state,
                partners: [...state.partners, action.payload],
            };
        case 'PARTNERS_ERROR':
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
};
