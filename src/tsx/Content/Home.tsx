import React from 'react';

import {
	Container,
	Typography
} from '@material-ui/core';
import customStyles from './../CustomStyles';

export default function Home() {
	const classes = customStyles();

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h1" className={classes.h1} color="inherit" gutterBottom>
				Главная
			</Typography>
			<Typography variant="h2" color="inherit" gutterBottom>
				Начальная страница тестовой сборки
			</Typography>
		</Container>
	);
}