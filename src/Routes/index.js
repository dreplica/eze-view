import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import {Container, Content} from './style' 

export default function Routes() {
  return (
      <Router>
      <Screens.Header />
      <Container>
        <Category />
        <Content>
          <Switch>
              <Route path='/search/:id' component={Screens.Search}/>
          </Switch>
        </Content>
      </Container>
    </Router>
  );
}
