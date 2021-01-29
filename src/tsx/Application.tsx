import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CssBaseline, MuiThemeProvider, createMuiTheme, LinearProgress, Fade } from '@material-ui/core';

import { loaderProgress } from './redux/actions';
import customStyles from './MUIStyles';
import Header from './Elements/Header';
import Home from './Home/Home';
import Users from './Users/Users';
import Error404 from './Error404/Error404';
import Footer from './Elements/Footer';

const THEME = createMuiTheme({
	palette: {
		type: 'dark'
	}
});

export default function Application() {
	const classes = customStyles();
	const dispatch = useDispatch();
	const loading = useSelector((state: any) => state.app.loading);
	const loadingProgress = useSelector((state: any) => state.app.loadingProgress);

	React.useEffect(() => {
		document.getElementById('cube-loader')?.classList.remove('loading');
	}, []);

	return (
		<BrowserRouter>
			<MuiThemeProvider theme={THEME}>
				<CssBaseline />
				<Fade in={loading} onExited={() => { dispatch(loaderProgress(0)) }}>
					<LinearProgress variant="determinate" value={loadingProgress} className={classes.loader} />
				</Fade>
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