import React from 'react';

import {
	Container,
	Typography
} from '@material-ui/core';

import customStyles from '../MUIStyles';

export default function Error404() {
	const classes = customStyles();

	return (
		<React.Fragment>
			<Container className={classes.cardGrid} maxWidth="md">
				<Typography variant="h1" color="inherit" gutterBottom>
					Ошибка 404
				</Typography>
				<Typography variant="h2" color="inherit" gutterBottom>
					Запрашиваемая страница не существует
				</Typography>
			</Container>
		</React.Fragment>
	);
}