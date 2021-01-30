import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Typography } from '@material-ui/core';
import customStyles from '../MUIStyles';

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
			<Typography variant="subtitle1" color="inherit" gutterBottom>
				Пример обработки 404 ошибки
			</Typography>
			<Typography variant="body1" color="inherit" gutterBottom>
				<Link to="/fake" style={{ color: 'lightgray' }}>Ссылка на несуществующую страницу</Link>
			</Typography>
		</Container>
	);
}