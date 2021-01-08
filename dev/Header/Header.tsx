import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom';

import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	offset: theme.mixins.toolbar,
	appBar: {
		backgroundColor: theme.palette.grey[800]
	}
}));

export default function Menu() {
	const classes = useStyles();

	return (
		<>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Menu
					</Typography>
					<Link to="/">Page 1</Link>
					<Link to="/users">Page 2</Link>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
		</>
	);
}