// A reducer is where we specify the app state changes in response to certain actions to our store/context
// create a new state with the changes and then send it
export default (state, action) => {
    switch (action.type) {
        case 'GET_EVENTS':
            return {
                ...state,
                loading: false,
                events: action.payload,
            };
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(
                    (event) => event.id !== action.payload
                ),
            };
        case 'ADD_EVENT':
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case 'EVENTS_ERROR':
            return {
                ...state,
                errors: action.payload,
            };
        default:
            return state;
    }
};
