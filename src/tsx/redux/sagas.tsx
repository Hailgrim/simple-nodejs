import { call, put, takeEvery } from 'redux-saga/effects';
import { hideLoader, loaderProgress, showLoader } from './actions';
import { GET_USERS, REQUEST_USERS } from './actionTypes';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker() {
	yield put(showLoader());
	yield put(loaderProgress(25));
	const payload = yield call(getUsers);
	yield put(loaderProgress(50));
	yield put({
		type: GET_USERS,
		payload: payload.data
	});
	yield put(loaderProgress(75));
	yield put(hideLoader());
}

async function getUsers() {
	const response = await fetch('https://reqres.in/api/users');
	return await response.json();
}