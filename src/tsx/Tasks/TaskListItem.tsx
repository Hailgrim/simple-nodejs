import React from 'react';
import { Button, Card, CardActions, CardContent, Checkbox, FormControlLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { ITask } from '../types';
import customStyles from '../MuiStyles';
import { completeTask, deleteTask, incompleteTask } from '../redux/actions';

const TaskListItem: React.FunctionComponent<ITask> = (props) => {
	const classes = customStyles();
	const dispatch = useDispatch();
	const isAuthorized = useSelector((state: any) => state.app.isAuthorized);

	const handleTaskDelete = () => {
		dispatch(deleteTask(props.id));
	}

	const handleTaskToggle = () => {
		if (props.complete) {
			dispatch(incompleteTask(props.id));
		} else {
			dispatch(completeTask(props.id));
		}
	}

	return (
		<Card className={classes.taskItem}>
			<CardContent className={classes.taskContent}>
				<FormControlLabel
					control={<Checkbox color="default" checked={props.complete} onChange={handleTaskToggle} name={`task${props.id}`} />}
					label={props.text}
					className={`${props.complete ? classes.taskComplete : ''}`}
				/>
			</CardContent>
			<CardActions>
				{isAuthorized && <Button size="small" className={classes.cardButton} onClick={handleTaskDelete}>Удалить</Button>}
			</CardActions>
		</Card>
	);
}
export default TaskListItem;