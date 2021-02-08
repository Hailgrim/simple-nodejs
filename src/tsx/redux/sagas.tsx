import { call, put, takeEvery } from 'redux-saga/effects';

import { hideLoader, loaderProgress, showLoader } from './actions';
import {
	LOGIN_REQUEST, LOGIN_PROCESSING, LOGIN_SUCCESS, LOGIN_FAILURE,
	POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE, POST_REQUEST, POST_SUCCESS, POST_FAILURE
} from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(LOGIN_REQUEST, logInWorker);
	yield takeEvery(POSTS_REQUEST, getPostsWorker);
	yield takeEvery(POST_REQUEST, getPostWorker);
}

/* ---------- START: logIn ---------- */

function* logInWorker(data: any) {
	yield put({
		type: LOGIN_PROCESSING
	});
	try {
		const payload = yield call(logIn, data);
		if (payload.login) {
			yield put({
				type: LOGIN_SUCCESS
			});
		} else {
			yield put({
				type: LOGIN_FAILURE,
				payload: 'Неверный логин или пароль'
			});
		}
	} catch (error) {
		yield put({
			type: LOGIN_FAILURE,
			payload: 'На сервере произошла ошибка'
		});
	}
}

async function logIn(action: any) {
	const response = await fetch('/auth', {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: action.payload.substr(1)
	});
	return await response.json();
}

/* ---------- END: logIn ---------- */

/* ---------- START: getPosts ---------- */

function* getPostsWorker(data: any) {
	yield put(showLoader());
	yield put(loaderProgress(25));
	try {
		const payload = yield call(getPosts, data);
		yield put(loaderProgress(50));
		if (payload && payload.list?.length) {
			yield put({
				type: POSTS_SUCCESS,
				payload: payload
			});
		} else {
			yield put({
				type: POSTS_FAILURE,
				payload: 'Статьи по данному запросу не найдены'
			});
		}
		yield put(hideLoader());
	} catch (error) {
		yield put({
			type: POSTS_FAILURE,
			payload: 'На сервере произошла ошибка'
		});
		yield put(hideLoader());
	}
}

async function getPosts(action: any) {
	const response = await fetch('/posts', {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: action.payload.substr(1)
	});
	return await response.json();
}

/* ---------- END: getPosts ---------- */

/* ---------- START: getPost ---------- */

function* getPostWorker(data: any) {
	yield put(showLoader());
	yield put(loaderProgress(25));
	try {
		const payload = yield call(getPost, data);
		yield put(loaderProgress(50));
		if (payload) {
			yield put({
				type: POST_SUCCESS,
				payload: payload
			});
		} else {
			yield put({
				type: POST_FAILURE,
				payload: 'Статья не найдена'
			});
		}
		yield put(hideLoader());
	} catch (error) {
		yield put({
			type: POST_FAILURE,
			payload: 'На сервере произошла ошибка'
		});
		yield put(hideLoader());
	}
}

async function getPost(action: any) {
	const response = await fetch(`/posts/${action.payload}`, {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	});
	return await response.json();
}

/* ---------- END: getPost ---------- */