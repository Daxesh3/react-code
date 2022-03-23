import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import './assets/vendors/style';
import './assets/styles/app.scss';
import Layout from './hoc/layout/component/layout.component';
import AuthService from './shared/services/auth.service';
import Spinner from 'shared/components/spinner/spinner';

// import containers, for which lazy loading is not needed, as they will be rendered for all users
import Login from './features/login/container/login.container';

/*
* import async components in order to lazy load the containers, which will be rendered conditionally
* based on the permissions user is having
*/
import * as asyncComponents from 'hoc/asyncComponents';

const App: React.FC = () => {
	const isLoggedIn = AuthService.checkLogin();
	if (isLoggedIn) {
		return (
			<Layout>
				<Suspense fallback={<Spinner />}>
					<Switch />
				</Suspense>
			</Layout>
		);
	}
	return (
		<>
			<Switch>
				<Route path='/login' exact component={Login} />
				<Redirect to='/login' />
			</Switch>
		</>
	);
};

export default App;
