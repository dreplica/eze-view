import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import Navigate from '../components/Navigator';
import LoadPhones from '../components/loadphones';
import { Container, Content } from './style';

export default function Routes() {
	
	return (
		<Router>
			<LoadPhones /> 
			<Screens.Header />
			<Container>
				<Category />
				<Content>
					<Navigate/>
					<Switch>
						<Route exact path="/" component={Screens.Home} />
						<Route path="/buy" component={Screens.Home} />
						<Route path="/sell" component={Screens.Home} />
						<Route path="/search/:id" component={Screens.Search} />
					</Switch>
					<Pagination />
					{/* <Footer /> */}
				</Content>
			</Container>
		</Router>
	);
}
