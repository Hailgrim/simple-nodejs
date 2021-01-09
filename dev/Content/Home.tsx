import React from 'react';

import {
	Container,
	Typography
} from '@material-ui/core';

import customStyles from './../CustomStyles';

export default function Home() {
	const classes = customStyles();

	return (
		<React.Fragment>
			<Container className={classes.cardGrid} maxWidth="md">
				<Typography variant="h1" color="inherit" gutterBottom>
					Home
				</Typography>
			</Container>
		</React.Fragment>
	);
}