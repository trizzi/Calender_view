import React, { createContext, useReducer } from 'react';
import PartnerReducer from './PartnerReducer';
import api from '../../utils/api/partner';

// Initial state
const initialState = {
    partners: [],
    errors: null,
};

// Create context
// https://reactjs.org/docs/hooks-reference.html
export const PartnerContext = createContext(initialState);

// Provider component
// It provides the state and any asscosiated actions to the components that the provider is wrapped around.
// The actions and state provided will be imported in the components in order to be used

export const PartnerProvider = ({ children }) => {
    // UseReducer accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
    // Dispatch is used to call a reducer action
    // Dispacth takes an action object containing a string corresponding to the type and an object for the data
    const [state, dispatch] = useReducer(PartnerReducer, initialState);

    // Actions that will make calls to the reducer. "async because axios returns a promise"
    async function getPartners() {
        try {
            const res = await api.getPartners();
            dispatch({
                type: 'GET_PARTNERS',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'PARTNERS_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    async function addPartner(partner) {
        try {
            const res = await api.savePartner(partner);

            dispatch({
                type: 'ADD_PARTNER',
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: 'PARTNERS_ERROR',
                payload: err.response.data.error,
            });
        }
    }

    //In order to use an action in a compnent we have to pass it in the provider
    return (
        <PartnerContext.Provider
            value={{
                partners: state.partners,
                error: state.error,
                getPartners,
                addPartner,
            }}
        >
            {children}
        </PartnerContext.Provider>
    );
};
