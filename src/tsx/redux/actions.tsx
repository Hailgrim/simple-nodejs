import {
	LOGIN_REQUEST, LOGOUT, LOADER_SHOW, LOADER_HIDE, LOADER_PROGRESS,
	POSTS_REQUEST, POST_REQUEST, POST_CLEAR
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

export function logIn(params: any) {
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

export function getPosts(params: any) {
	return {
		type: POSTS_REQUEST,
		payload: params
	};
}

export function getPost(params: any) {
	return {
		type: POST_REQUEST,
		payload: params
	};
}

export function clearPost() {
	return {
		type: POST_CLEAR
	};
}

/* ---------- END: Posts ---------- */