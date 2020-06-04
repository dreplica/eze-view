import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import { Container, Content } from './style';

export default function Routes() {
	return (
    <Router>
      <h1>Load Phones</h1>
			<Screens.Header />
			<Container>
				<Category />
				<Content>
					<Switch>
						<Route exact path="/" component={Screens.Home} />
					</Switch>
					<Switch>
						<Route path="/search/:id" component={Screens.Search} />
					</Switch>
				</Content>
			</Container>
		</Router>
	);
}
