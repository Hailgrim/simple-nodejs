import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Box, TextField } from '@material-ui/core';

import { logIn } from '../redux/actions';
import customStyles from '../MuiStyles';
import Alert from './Alert';

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
		<form className={classes.form} onSubmit={handleAuthLogIn}>
			{authError && <Alert content={authError} />}
			<TextField type="text" margin="dense" size="small" id="email" label="E-mail" variant="outlined" value={login} onChange={handleLoginChange} fullWidth required />
			<TextField type="password" margin="dense" size="small" id="password" label="Пароль" variant="outlined" value={password}  onChange={handlePasswordChange} fullWidth required />
			<Box textAlign="center">
				<Button type="submit" variant="contained" disabled={authProcessing}>{authProcessing ? 'Подождите' : 'Войти'}</Button>
			</Box>
		</form>
	);
}
export default AuthForm;