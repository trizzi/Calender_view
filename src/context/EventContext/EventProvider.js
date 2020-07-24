import React, { createContext, useReducer } from 'react';
import EventReducer from './EventReducer';
import api from '../../utils/api/event';

// Initial state
const initialState = {
    events: [],
    errors: null,
    loading: true,
};

// Create context
// https://reactjs.org/docs/hooks-reference.html
export const EventContext = createContext(initialState);

// Provider component
// It provides the state and any asscosiated actions to the components that the provider is wrapped around.
// The actions and state provided will be imported in the components in order to be used

export const EventProvider = ({ children }) => {
    // UseReducer accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
    // Dispatch is used to call a reducer action
    // Dispacth takes an action object containing a string corresponding to the type and an object for the data
    const [state, dispatch] = useReducer(EventReducer, initialState);

    // Actions that will make calls to the reducer. "async because axios returns a promise"
    async function getEvents() {
        try {
            const res = await api.getEvents();

            dispatch({
                type: 'GET_EVENTS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'EVENTS_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    async function addEvent(event) {
        try {
            const res = await api.saveEvent(event);

            dispatch({
                type: 'ADD_EVENT',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'EVENTS_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    //In order to use an action in a compnent we have to pass it in the provider
    return (
        <EventContext.Provider
            value={{
                events: state.events,
                error: state.error,
                loading: state.loading,
                getEvents,
                addEvent,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};
