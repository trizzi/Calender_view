import React, { createContext, useReducer } from 'react';
import AuthReducer from './AuthReducer';
import api from '../../utils/api/auth';

// Initial state
const initialState = {
    currentUser: null,
    errors: null,
    response: null,
};

// Create context
// https://reactjs.org/docs/hooks-reference.html
export const AuthContext = createContext(initialState);

// Provider component
// It provides the state and any associated actions to the components that the provider is wrapped around.
// The actions and state provided will be imported in the components in order to be used
export const AuthProvider = ({ children }) => {
    // UseReducer accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
    // Dispatch is used to call a reducer action
    // Dispatch takes an action object containing a string corresponding to the type and an object for the data
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    async function login(user) {
        try {
            const res = await api.logUserIn(user);

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'LOGIN_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    async function forgotPassword(email) {
        try {
            const res = await api.userPasswordReset(email);

            dispatch({
                type: 'PASSWORD_RESET_SUCCESS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'PASSWORD_RESET_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser: state.currentUser,
                error: state.error,
                login,
                forgotPassword,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
