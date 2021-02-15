import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';

import customStyles from '../MuiStyles';

const Home: React.FunctionComponent = () => {
	const classes = customStyles();

	return (
		<Container className={classes.container} maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>
				Главная
			</Typography>
			<Typography variant="h4" color="inherit" gutterBottom>
				Начальная страница тестовой сборки
			</Typography>
			<Typography variant="subtitle1" color="inherit" gutterBottom>
				Примеры обработки несуществующих страниц:
			</Typography>
			<Typography variant="body1" color="inherit" gutterBottom>
				<Link to="/fake" style={{ color: 'lightgray' }}>Ссылка на несуществующую страницу</Link>
			</Typography>
			<Typography variant="body1" color="inherit" gutterBottom>
				<Link to="/posts?page=3" style={{ color: 'lightgray' }}>Ссылка на несуществующую страницу списка статей</Link>
			</Typography>
			<Typography variant="body1" color="inherit" gutterBottom>
				<Link to="/posts/123" style={{ color: 'lightgray' }}>Ссылка на несуществующую страницу конкретной статьи</Link>
			</Typography>
			<Typography variant="subtitle1" color="inherit" gutterBottom>
				Авторизация и заметки:
			</Typography>
			<Typography variant="body1" color="inherit" gutterBottom>
				Для создания и удаления заметок необходимо пройти авторизацию. Логин: admin. Пароль: 1q2w3e4r5.
			</Typography>
		</Container>
	);
}
export default Home;