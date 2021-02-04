import { call, put, takeEvery } from 'redux-saga/effects';

import { hideLoader, loaderProgress, showLoader } from './actions';
import { GET_POSTS, REQUEST_POSTS } from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker(action: any) {
	yield put(showLoader());
	yield put(loaderProgress(25));
	const payload = yield call(getUsers, action);
	yield put(loaderProgress(50));
	yield put({
		type: GET_POSTS,
		payload: payload
	});
	yield put(hideLoader());
}

async function getUsers(action: any) {
	const response = await fetch('/posts', {
		method: 'POST',
		cache: 'no-cache',
		headers: {
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body: action.payload.substr(1)
	});
	return await response.json();
}