import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import Navigate from '../components/Navigator';
import LoadPhones from '../components/loadphones';
import Spinner from '../components/spinner';
import { Container, Content } from './style';
import { connect } from 'react-redux';

function Routes(props) {

	return (
		<Router>
			{props.loading && <Spinner />}
			<LoadPhones />
			<Screens.Header />
			<Container>
				<Category />
				<Content>
					<Navigate />
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

const mapStateToProps = ({ ItemsReducer }) => ({
	loading: ItemsReducer.loading
})

export default connect(mapStateToProps, null)(Routes)