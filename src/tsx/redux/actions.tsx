import { ITask } from "../types";
import {
	LOGIN_REQUEST, LOGOUT, LOADER_SHOW, LOADER_HIDE, LOADER_PROGRESS,
	POSTS_REQUEST, POST_REQUEST, POST_CLEAR,
	TASK_ADD, TASK_COMPLETE, TASK_INCOMPLETE, TASK_DELETE
} from "./actionTypes";

/* ---------- START: App ---------- */

export function showLoader() {
	return {
		type: LOADER_SHOW
	};
}

export function hideLoader() {
	return {
		type: LOADER_HIDE
	};
}

export function loaderProgress(percent: number) {
	return {
		type: LOADER_PROGRESS,
		payload: percent
	};
}

export function logIn(params: string) {
	return {
		type: LOGIN_REQUEST,
		payload: params
	};
}

export function logOut() {
	return {
		type: LOGOUT
	};
}

/* ---------- END: App ---------- */

/* ---------- START: Posts ---------- */

export function getPosts(params: string | undefined) {
	return {
		type: POSTS_REQUEST,
		payload: params
	};
}

export function getPost(id: number | undefined) {
	return {
		type: POST_REQUEST,
		payload: id
	};
}

export function clearPost() {
	return {
		type: POST_CLEAR
	};
}

/* ---------- END: Posts ---------- */

/* ---------- START: Tasks ---------- */

export function addTask(task: ITask) {
	return {
		type: TASK_ADD,
		payload: task
	};
}

export function completeTask(id: number) {
	return {
		type: TASK_COMPLETE,
		payload: id
	};
}

export function incompleteTask(id: number) {
	return {
		type: TASK_INCOMPLETE,
		payload: id
	};
}

export function deleteTask(id: number) {
	return {
		type: TASK_DELETE,
		payload: id
	};
}

/* ---------- END: Tasks ---------- */