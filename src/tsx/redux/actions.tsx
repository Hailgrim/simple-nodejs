import { IPost } from "../types";
import {
	LOGIN, LOGOUT, HIDE_LOADER, SHOW_LOADER, LOADER_PROGRESS, SHOW_ALERT, HIDE_ALERT,
	CREATE_POST, GET_POSTS, REQUEST_POSTS
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

export function createUser(user: IPost) {
	return {
		type: CREATE_POST,
		payload: user
	};
}

export function getPosts(params: any) {
	return {
		type: REQUEST_POSTS,
		payload: params
	};
}

export function getUser(params: any) {
	return {
		type: REQUEST_POSTS,
		payload: params
	};
}