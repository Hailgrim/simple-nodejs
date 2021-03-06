import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppBar, Toolbar, Container, Modal, Fade, Backdrop, Typography, Box } from '@material-ui/core';

import { logOut } from '../redux/actions';
import customStyles from '../MuiStyles';
import AuthForm from './AuthForm';
import { rootReducerContainer } from '../types';

const Menu: React.FunctionComponent = () => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const isAuthorized = useSelector<rootReducerContainer, boolean>((state) => state.app.isAuthorized);
	const [authModal, setAuthModal] = React.useState(false);

	const handleAuthModalOpen = () => {
		setAuthModal(true);
	}

	const handleAuthModalClose = () => {
		setAuthModal(false);
	}

	const handleAuthLogOut = () => {
		dispatch(logOut());
	}

	React.useEffect(() => {
		if (isAuthorized) handleAuthModalClose();
	}, [isAuthorized]);

	return (
		<AppBar className={classes.appBar} position="fixed">
			<Toolbar className={classes.toolbar}>
				<Container maxWidth="md">
					<NavLink to="/" exact>Главная</NavLink>
					<NavLink to="/posts">Статьи</NavLink>
					<NavLink to="/tasks">Заметки</NavLink>
					{!isAuthorized ? (
						<Typography component="a" className="auth" onClick={handleAuthModalOpen}>Авторизоваться</Typography>
					) : (
							<Typography component="a" className="auth" onClick={handleAuthLogOut}>Выйти</Typography>
						)}
					<Modal
						open={authModal}
						onClose={handleAuthModalClose}
						aria-labelledby="simple-modal-title"
						aria-describedby="simple-modal-description"
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{ timeout: 200 }}
						className={classes.modal}
					>
						<Fade in={authModal}>
							<Box className="body">
								<Typography variant="h5" gutterBottom>Авторизация</Typography>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={classes.modalClose} onClick={handleAuthModalClose}>
									<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
								</svg>
								<AuthForm />
							</Box>
						</Fade>
					</Modal>
				</Container>
			</Toolbar>
		</AppBar>
	);
}
export default Menu;