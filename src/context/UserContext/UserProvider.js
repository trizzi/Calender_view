import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import api from '../../utils/api/user';

// Initial state
const initialState = {
    currentUser: null,
    users: [],
    errors: null,
};

// Create context
// https://reactjs.org/docs/hooks-reference.html
export const UserContext = createContext(initialState);

// Provider component
// It provides the state and any associated actions to the components that the provider is wrapped around.
// The actions and state provided will be imported in the components in order to be used
export const UserProvider = ({ children }) => {
    // UseReducer accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
    // Dispatch is used to call a reducer action
    // Dispacth takes an action object containing a string corresponding to the type and an object for the data
    const [state, dispatch] = useReducer(UserReducer, initialState);

    // Actions that will make calls to the reducer. "async because axios returns a promise"
    async function getUsers() {
        try {
            const res = await api.getUsers();

            dispatch({
                type: 'GET_USERS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    async function addUser(user) {
        try {
            const res = await api.saveUser(user);

            dispatch({
                type: 'ADD_USER',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'USER_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    return (
        <UserContext.Provider
            value={{
                currentUser: state.currentUser,
                users: state.users,
                error: state.error,
                getUsers,
                addUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
