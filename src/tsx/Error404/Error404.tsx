import React from 'react';

import {
	Container,
	Typography
} from '@material-ui/core';

import customStyles from '../MuiStyles';

const Error404: React.FunctionComponent = () => {
	const classes = customStyles();

	return (
		<Container className={classes.cardGrid} maxWidth="md">
			<Typography variant="h3" component="h1" color="inherit" gutterBottom>
				Ошибка 404
			</Typography>
			<Typography variant="h4" color="inherit" gutterBottom>
				Запрашиваемая страница не существует
			</Typography>
		</Container>
	);
}
export default Error404;