import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import customStyles from '../MuiStyles';

const Home: React.FunctionComponent = () => {
	const classes = customStyles();

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>
				Главная
			</Typography>
			<Typography variant="h4" color="inherit" gutterBottom>
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
export default Home;