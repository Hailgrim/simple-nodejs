import React from 'react';
import {
	Link
} from 'react-router-dom';

import {
	AppBar,
	Toolbar
} from '@material-ui/core';

import customStyles from './CustomStyles';

export default function Menu() {
	const classes = customStyles();

	return (
		<React.Fragment>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar className={classes.toolbar}>
					<Link to="/">Home</Link>
					<Link to="/users">Users</Link>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
		</React.Fragment>
	);
}