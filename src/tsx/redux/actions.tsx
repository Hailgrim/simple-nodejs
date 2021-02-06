import {
	LOGIN, LOGOUT, HIDE_LOADER, SHOW_LOADER, LOADER_PROGRESS, SHOW_ALERT, HIDE_ALERT,
	REQUEST_POSTS, REQUEST_POST, CLEAR_POST
} from "./actionTypes";

/* ---------- START: App ---------- */

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

/* ---------- END: App ---------- */

/* ---------- START: Posts ---------- */

export function getPosts(params: any) {
	return {
		type: REQUEST_POSTS,
		payload: params
	};
}

export function getPost(params: any) {
	return {
		type: REQUEST_POST,
		payload: params
	};
}

export function clearPost() {
	return {
		type: CLEAR_POST
	};
}

/* ---------- END: Posts ---------- */