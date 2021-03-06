import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { useSelector, useStore } from 'react-redux';

import customStyles from '../MuiStyles';
import TaskForm from './TaskForm';
import { ITask, rootReducerContainer } from '../types';
import TaskListItem from './TaskListItem';
import Alert from '../Parts/Alert';

const Tasks: React.FunctionComponent = () => {
	const classes = customStyles();
	const list = useSelector<rootReducerContainer, ITask[]>((state) => state.tasks.list);
	const store = useStore();
	const [listParseError, setListParseError] = React.useState('');

	React.useEffect(() => {
		let unsubscribe = store.subscribe(() => {
			try {
				let newList = JSON.stringify(store.getState().tasks.list);
				let localList = window.localStorage.getItem('Tasks');
				if (localList != newList) window.localStorage.setItem('Tasks', newList);
			} catch (error) {
				setListParseError('Во время обновления задач произошла ошибка');
			}
		});

		return () => {
			unsubscribe();
		}
	}, []);

	return (
		<Container className={classes.container} maxWidth="md">
			<Typography variant="h3" component="h1" className={classes.h1} color="inherit" gutterBottom>Заметки</Typography>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<TaskForm />
				</Grid>
				{listParseError &&
					<Alert content={listParseError} />
				}
				{list.length > 0 ? (

					list.map((task: ITask) =>
						<Grid item key={task.id} xs={12}>
							<TaskListItem {...task} />
						</Grid>
					)

				) : (
					<Grid item xs={12}>
						<Box color="inherit" textAlign="center" paddingTop="25px">
							Список заметок пуст
						</Box>
					</Grid>
				)}
			</Grid>
		</Container>
	);
}
export default Tasks;