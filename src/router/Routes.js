import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from '../components/header';
import Home from '../pages/home/index';
import Auth from '../pages/auth/index';
import Event from '../pages/event/index';

/* TODO
Design a proper 404 error page
 */
const NoMatch = () => <h1>404 Not Found</h1>;

/* TODO
Retrieve user object
 */
const user = null;

function Routes() {
    return (
        <>
            <Header />
            <Switch>
                {user === null ? (
                    /*
                Render auth page when user visits sections of the app that requires authorization but user is not authorized.
                */
                    <Route path="/auth" component={Auth} />
                ) : (
                        /*
                        Otherwise redirect to last location
                        */
                        <Redirect from="/auth" to="" />
                    )}
                {/*
            Add routes that don't requires the user to be authenticated below
             */}

                <Route exact path="/" component={Home} />
                <Route path="/event" component={Event} />
                <Route component={NoMatch} />
            </Switch>
        </>
    );
}

export default Routes;
