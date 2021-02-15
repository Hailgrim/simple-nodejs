import React from 'react';
import { Box, Button, Grid, TextField } from '@material-ui/core';

import customStyles from '../MuiStyles';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';
import { ITask } from '../types';

const TaskForm: React.FunctionComponent = () => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const [taskText, setTaskText] = React.useState('');
	const isAuthorized = useSelector((state: any) => state.app.isAuthorized);

	const handleTaskAdd = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		let newTask: ITask = {
			id: new Date().getTime(),
			text: taskText,
			complete: false
		};
		dispatch(addTask(newTask));
		event.currentTarget.reset();
	}

	const handleTaskTextChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		setTaskText(event.currentTarget.value);
	}

	return (
		<form className={`${classes.form} ${classes.taskForm}`} onSubmit={handleTaskAdd}>
			<Grid container spacing={4} alignItems="center">
				{isAuthorized ? (
					<React.Fragment>
						<Grid item xs={8} md={10}>
							<TextField size="small" name="task" label="Текст заметки" variant="outlined" fullWidth required onChange={handleTaskTextChange} />
						</Grid>
						<Grid item xs={4} md={2}>
							<Button type="submit" variant="text" size="medium" fullWidth>Добавить</Button>
						</Grid>
					</React.Fragment>
				) : (
					<Grid item xs={12}>
						<Box color="inherit" textAlign="center">
							Для добавления/редактирования заметок необходимо пройти авторизацию
						</Box>
					</Grid>
				)}
			</Grid>
		</form>
	);
}
export default TaskForm;