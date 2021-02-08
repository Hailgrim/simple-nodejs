import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, FormControl, InputLabel, Input } from '@material-ui/core';

import { logIn } from '../redux/actions';
import customStyles from '../MuiStyles';

const AuthForm: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const [login, setLogin] = React.useState('');
	const [password, setPassword] = React.useState('');
	const authProcessing = useSelector((state: any) => state.app.authProcessing);
	const authError = useSelector((state: any) => state.app.authError);
	const classes = customStyles();

	const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.currentTarget.value);
	}

	const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	}

	const handleAuthLogIn = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(logIn(`?login=${login}&password=${password}`));
	}

	return (
		<form onSubmit={handleAuthLogIn}>
			{authError &&
				<Box textAlign="center" className={classes.alert}>{authError}</Box>
			}
			<FormControl size="medium" margin="dense" disabled={authProcessing} fullWidth required>
				<InputLabel htmlFor="email">E-mail</InputLabel>
				<Input id="email" aria-describedby="E-mail адресс пользователя" onChange={handleLoginChange} />
			</FormControl>
			<FormControl size="medium" margin="dense" disabled={authProcessing} fullWidth required>
				<InputLabel htmlFor="password">Пароль</InputLabel>
				<Input id="password" aria-describedby="Пароль пользователя" onChange={handlePasswordChange} />
			</FormControl>
			<Box textAlign="center">
				<Button type="submit" variant="contained" disabled={authProcessing}>{authProcessing ? 'Подождите' : 'Войти'}</Button>
			</Box>
		</form>
	);
}
export default AuthForm;