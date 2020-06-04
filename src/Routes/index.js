import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import { Container, Content } from './style';
import Navigate from '../components/Navigator';

export default function Routes() {
	const previous = false;
	return (
    <Router>
			<Screens.Header />
			<Container>
				<Category />
				<Content>
					<Navigate/>
					<Switch>
						<Route exact path="/" component={Screens.Home} />
						<Route path="/search/:id" component={Screens.Search} />
					</Switch>
					{previous && <Pagination />}
				</Content>
			</Container>
		</Router>
	);
}
