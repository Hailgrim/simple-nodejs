import { IUser } from './../typescript';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, showAlert } from '../redux/actions';
import Alert from '../Elements/Alert';

import { Typography, Button, FormControl, InputLabel, Input, Backdrop, Box, Fade, Modal } from '@material-ui/core';
import customStyles from '../MUIStyles';

export default function NewUser(props: any) {
	const classes = customStyles();
	const dispatch = useDispatch();
	const alert = useSelector((state: any) => state.app.alert);
	const [newUserModal, setNewUserModal] = React.useState(false);

	const addUser = (event: any) => {
		event.preventDefault();
		if (event.target.elements.email.value == 'test@test.ru') {
			dispatch(showAlert('Запрещённый ящик!'));
			return;
		}
		let newUser: IUser = {
			id: new Date().getTime(),
			avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNITEz8DwAEbQIj5vmLagAAAABJRU5ErkJggg==',
			email: event.target.elements.email.value ? event.target.elements.email.value : '\xa0',
			first_name: event.target.elements.first_name.value ? event.target.elements.first_name.value : '\xa0',
			last_name: event.target.elements.last_name.value ? event.target.elements.last_name.value : '\xa0'
		};
		dispatch(createUser(newUser));
		handleNewUserModalClose();
	}

	const handleNewUserModalOpen = () => {
		setNewUserModal(true);
	}

	const handleNewUserModalClose = () => {
		setNewUserModal(false);
	}

	return (
		<React.Fragment>
			<Button variant="contained" onClick={handleNewUserModalOpen} type="submit">Добавить нового пользователя</Button>
			<Modal
				open={newUserModal}
				onClose={handleNewUserModalClose}
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 200 }}
				className={classes.modal}
			>
				<Fade in={newUserModal}>
					<Box className="body">
						<Typography variant="h5" gutterBottom>Добавление нового пользователя</Typography>
						{alert && <Alert content={alert} />}
						<form method="POST" onSubmit={addUser}>
							<FormControl fullWidth required>
								<InputLabel>E-mail</InputLabel>
								<Input name="email" type="text" />
							</FormControl>
							<FormControl fullWidth required>
								<InputLabel>Имя</InputLabel>
								<Input name="first_name" type="text" />
							</FormControl>
							<FormControl fullWidth required>
								<InputLabel>Фамилия</InputLabel>
								<Input name="last_name" type="text" />
							</FormControl>
							<Box textAlign="center">
								<Button variant="contained" type="submit">Добавить</Button>
							</Box>
						</form>
					</Box>
				</Fade>
			</Modal>
		</React.Fragment>
	);
}