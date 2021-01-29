import { IUser } from "../types";
import {
	LOGIN, LOGOUT, HIDE_LOADER, SHOW_LOADER, LOADER_PROGRESS, SHOW_ALERT, HIDE_ALERT,
	CREATE_USER, GET_USERS, REQUEST_USERS
} from "./actionTypes";

export function showLoader() {
	return {
		type: SHOW_LOADER
	};
}

export function hideLoader() {
	return {
		type: HIDE_LOADER
	};
}

export function loaderProgress(percent: number) {
	return {
		type: LOADER_PROGRESS,
		payload: percent
	};
}

export function logIn() {
	return {
		type: LOGIN
	};
}

export function logOut() {
	return {
		type: LOGOUT
	};
}

export function showAlert(content: any) {
	return {
		type: SHOW_ALERT,
		payload: content
	};
}

export function hideAlert() {
	return {
		type: HIDE_ALERT
	};
}

export function createUser(user: IUser) {
	return {
		type: CREATE_USER,
		payload: user
	};
}

export function getUsers(params: any) {
	/*return async (dispatch: any) => {
		dispatch(showLoader());
		const response = await fetch('https://reqres.in/api/users');
		const json = await response.json();
		dispatch({
			type: GET_USERS,
			payload: json.data
		});
		dispatch(hideLoader());
	}*/
	return {
		type: REQUEST_USERS,
		payload: params
	};
}