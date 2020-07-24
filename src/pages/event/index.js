import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import View from './ViewEvent';
import Add from './AddEvent';
import Edit from './EditEvent';

function Event() {
  return (
    <Switch>
      <Redirect exact={true} from='/event' to='/event/view' />
      <Route path='/event/view/:id' component={View} />
      <Route path='/event/add' component={Add} />
      <Route path='/event/edit/:id' component={Edit} />
    </Switch>
  );
}
export default Event;
