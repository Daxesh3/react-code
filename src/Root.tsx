import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import defaultTheme from './shared/themes/defaultTheme';
import ErrorBoundary from './shared/components/errorBoundary/errorBoundary';
import App from './App';
import store from './store';
import WithErrorHandler from 'hoc/withErrorHandler/withErrorHandler';

const Root: React.FC = props => {
	const applyTheme = createMuiTheme(defaultTheme);
	return (
		<Provider store={store}>
			<MuiThemeProvider theme={applyTheme}>
				<WithErrorHandler />
				<ErrorBoundary>
					<div className='app-main'>
						<BrowserRouter>
							<App {...props} />
						</BrowserRouter>
					</div>
				</ErrorBoundary>
			</MuiThemeProvider>
		</Provider>
	);
};

export default Root;
