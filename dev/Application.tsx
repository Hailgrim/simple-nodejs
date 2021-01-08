import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import {
	CssBaseline,
	MuiThemeProvider,
	createMuiTheme
} from '@material-ui/core';

import Header from './Header/Header';
import Home from './Main/Home';
import Users from './Main/Users';

const THEME = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

export default function Application () {
	React.useEffect(() => {
		document.body.classList.remove('loading');
	}, []);

	return (
		<>
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
							</Switch>
					</main>
					<footer>
						Footer
					</footer>
				</MuiThemeProvider>
			</BrowserRouter>
		</>
	);
}