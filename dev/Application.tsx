import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom';

import Header from './Header';
import Home from './Content/Home';
import Users from './Content/Users';
import Error404 from './Content/Error404';
import Footer from './Footer';

import {
	CssBaseline,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core';
import customStyles from './CustomStyles';

const THEME = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

export default function Application() {
	const classes = customStyles();

	React.useEffect(() => {
		document.body.classList.remove('loading');
	}, []);

	return (
		<BrowserRouter>
			<MuiThemeProvider theme={THEME}>
				<CssBaseline />
				<Header />
				<main className={classes.main}>
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
	);
}