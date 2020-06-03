import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Screens from './screens';

export default function Routes() {
  return (
      <Router>
          <Screens.Header />
          <Switch>
              <Route path='/search/:id' component={Screens.Search}/>
          </Switch>
    </Router>
  );
}
