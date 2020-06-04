import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import Navigate from '../components/Navigator';
import LoadPhones from '../components/loadphones';
import { fetchData } from '../store/actioncreators/items';
import { Container, Content } from './style';

 function Routes(props) {
	useEffect(() => {
		props.fetch()
		console.log("jam")
	},) 
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
						{/* <Route path="/search/:id" component={Screens.Search} /> */}
					</Switch>
					<Pagination />
					{/* <Footer /> */}
				</Content>
			</Container>
		</Router>
	);
}

export default connect(null,{fetch:fetchData})(Routes)