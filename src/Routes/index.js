import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Screens from '../screens';
import Category from '../components/category';
import Pagination from '../components/pagination';
import Navigate from '../components/Navigator';
import Spinner from '../components/spinner';
import TopIcons from '../components/menuIcon';
import { Container, Content } from './style';
import Footer from '../screens/footer';

function Routes(props) {

	return (
		<Router>
			{props.loading && <Spinner />}
			<TopIcons />
			<Screens.Header />
			<Container>
				<Category />
				<Content>
					<Navigate />
					<Switch>
						<Route exact path="/" component={Screens.Home} />
					</Switch>
					<Pagination />
				</Content>
			</Container>
			<Screens.Footer />
		</Router>
	);
}

const mapStateToProps = ({ ItemsReducer }) => ({
	loading: ItemsReducer.loading
})

export default connect(mapStateToProps, null)(Routes)