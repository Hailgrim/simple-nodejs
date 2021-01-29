import { call, put, takeEvery } from 'redux-saga/effects';

import { hideLoader, loaderProgress, showLoader } from './actions';
import { GET_USERS, REQUEST_USERS } from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker(action: any) {
	yield put(showLoader());
	yield put(loaderProgress(25));
	const payload = yield call(getUsers, action);
	yield put(loaderProgress(50));
	yield put({
		type: GET_USERS,
		payload: payload
	});
	yield put(loaderProgress(75));
	yield put(hideLoader());
}

async function getUsers(action: any) {
	let link = 'https://reqres.in/api/users';
	if (action?.payload) link += action.payload;
	const response = await fetch(link);
	return await response.json();
}