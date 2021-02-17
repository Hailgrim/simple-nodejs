import { appReducerParams, ReduxActionParams } from '../types';
import { LOADER_SHOW, LOADER_HIDE, LOADER_PROGRESS, LOGIN_PROCESSING, LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT } from './actionTypes';

const initialState = {
	isAuthorized: false,
	authProcessing: false,
	authError: false,
	loading: false,
	loadingProgress: 0
} as appReducerParams;

export const appReducer = (state: appReducerParams = initialState, action: ReduxActionParams) => {
	switch (action.type) {
		case LOGIN_PROCESSING:
			return { ...state, authProcessing: true, authError: false };
		case LOGIN_SUCCESS:
			return { ...state, isAuthorized: true, authProcessing: false };
		case LOGIN_FAILURE:
			return { ...state, authProcessing: false, authError: action.payload };
		case LOGOUT:
			return { ...state, isAuthorized: false, authProcessing: false };
		case LOADER_SHOW:
			return { ...state, loading: true, loadingProgress: 0 };
		case LOADER_HIDE:
			return { ...state, loading: false, loadingProgress: 100 };
		case LOADER_PROGRESS:
			return { ...state, loadingProgress: action.payload };
		default: return state;
	}
}