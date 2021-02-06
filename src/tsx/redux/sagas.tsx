import { call, put, takeEvery } from 'redux-saga/effects';

import { hideLoader, loaderProgress, showLoader } from './actions';
import { GET_POST, GET_POSTS, REQUEST_POST, REQUEST_POSTS } from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, getPostsWorker);
	yield takeEvery(REQUEST_POST, getPostWorker);
}

/* ---------- START: getPosts ---------- */

function* getPostsWorker(data: any) {
	yield put(showLoader());
	yield put(loaderProgress(25));
	const payload = yield call(getPosts, data);
	yield put(loaderProgress(50));
	yield put({
		type: GET_POSTS,
		payload: payload
	});
	yield put(hideLoader());
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
	const payload = yield call(getPost, data);
	yield put(loaderProgress(50));
	yield put({
		type: GET_POST,
		payload: payload
	});
	yield put(hideLoader());
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