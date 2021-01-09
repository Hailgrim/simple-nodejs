import React from 'react';
import {
	Link
} from 'react-router-dom';

import {
	AppBar,
	Toolbar,
	Container
} from '@material-ui/core';

import customStyles from './CustomStyles';

export default function Menu() {
	const classes = customStyles();

	return (
		<React.Fragment>
			<AppBar className={classes.appBar} position="fixed">
				<Toolbar className={classes.toolbar}>
					<Container maxWidth="md">
						<Link to="/">Главная</Link>
						<Link to="/users">Пользователи</Link>
					</Container>
				</Toolbar>
			</AppBar>
			<div className={classes.offset}></div>
		</React.Fragment>
	);
}