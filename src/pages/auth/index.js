import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Register from './Register';

function Auth() {
    return (
        <Switch>
            <Redirect exact={true} from="/auth" to="/auth/login" />
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/forgot-password" component={ForgotPassword} />
            <Route path="/auth/register" component={Register} />
        </Switch>
    );
}
export default Auth;
