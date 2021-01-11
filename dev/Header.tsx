import React from 'react';
import {
	Link
} from 'react-router-dom';

import {
	AppBar,
	Toolbar,
	Container,
	Modal,
	Fade,
	Backdrop,
	Button,
	Typography,
	Box
} from '@material-ui/core';
import customStyles from './CustomStyles';

export default function Menu() {
	const classes = customStyles();
	const [authModal, setAuthModal] = React.useState(false);

	const handleAuthModalOpen = () => {
		setAuthModal(true);
	}

	const handleAuthModalClose = () => {
		setAuthModal(false);
	}

	return (
		<AppBar className={classes.appBar} position="fixed">
			<Toolbar className={classes.toolbar}>
				<Container maxWidth="md">
					<Link to="/">Главная</Link>
					<Link to="/users">Пользователи</Link>
					<Typography component="a" className="auth" onClick={handleAuthModalOpen}>Авторизоваться</Typography>
				</Container>
			</Toolbar>
			<Modal
				open={authModal}
				onClose={handleAuthModalClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 200
				}}
				className={classes.modal}
			>
				<Fade in={authModal}>
					<Box className="body">
						<Typography variant="h5" gutterBottom>Авторизация</Typography>
						<Typography variant="body1" gutterBottom>Заглушка авторизации. Для авторизации необходимо просто нажать на кнопку "Войти".</Typography>
						<Box textAlign="center">
							<Button variant="contained" onClick={handleAuthModalClose}>Войти</Button>
						</Box>
					</Box>
				</Fade>
			</Modal>
		</AppBar>
	);
}