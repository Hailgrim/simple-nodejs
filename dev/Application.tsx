import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import {
	CssBaseline,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core';

import Header from './Header';
import Home from './Content/Home';
import Users from './Content/Users';
import Error404 from './Content/Error404';
import Footer from './Footer';

const THEME = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

export default function Application() {

	React.useEffect(() => {
		document.body.classList.remove('loading');
	}, []);

	return (
		<React.Fragment>
			<BrowserRouter>
				<MuiThemeProvider theme={THEME}>
					<CssBaseline />
					<Header />
					<main>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/users">
								<Users />
							</Route>
							<Route>
								<Error404 />
							</Route>
						</Switch>
					</main>
					<Footer />
				</MuiThemeProvider>
			</BrowserRouter>
		</React.Fragment>
	);

}