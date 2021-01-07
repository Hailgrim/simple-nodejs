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
import Page1 from './Main/Page1';
import Page2 from './Main/Page2';

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
									<Page1 />
								</Route>
								<Route path="/page-2">
									<Page2 />
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