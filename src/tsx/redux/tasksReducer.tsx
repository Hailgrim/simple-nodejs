import { ITask, ReduxActionParams, tasksReducerParams } from "../types";
import { TASK_ADD, TASK_COMPLETE, TASK_DELETE, TASK_INCOMPLETE } from "./actionTypes";

const initialState = {
	list: new Array<ITask>()
} as tasksReducerParams;

try {
	let list = window.localStorage.getItem('Tasks');
	if (list) initialState.list = JSON.parse(list);
} catch (error) {
	initialState.list = [];
}

export const tasksReducer = (state: tasksReducerParams = initialState, action: ReduxActionParams) => {
	switch (action.type) {
		case TASK_ADD:
			return { ...state, list: state.list.concat(action.payload) }
		case TASK_COMPLETE:
			return {
				...state, list: state.list.filter((task: ITask) => {
					if (task.id == action.payload) task.complete = true;
					return task;
				})
			}
		case TASK_INCOMPLETE:
			return {
				...state, list: state.list.filter((task: ITask) => {
					if (task.id == action.payload) task.complete = false;
					return task;
				})
			}
		case TASK_DELETE:
			return {
				...state, list: state.list.filter((task: ITask) => {
					if (task.id != action.payload) return task;
				})
			}
		default: return state;
	}
}