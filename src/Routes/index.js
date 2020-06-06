import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import Navigate from '../components/Navigator';
import LoadPhones from '../components/loadphones';
import Spinner from '../components/spinner';
import { Container, Content } from './style';

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
						<Route exact path="/" component={Screens.Screens.HomeScreen} />
						<Route path="/buy" component={Screens.Screens.BuyScreen} />
						<Route path="/sell" component={Screens.Screens.SellScreen} />
						<Route path="/search/:search" component={Screens.Screens.SearchScreen} />
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