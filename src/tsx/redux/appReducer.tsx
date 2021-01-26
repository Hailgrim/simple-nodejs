import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, LOADER_PROGRESS, LOGIN, LOGOUT } from './actionTypes';

const initialState = {
	isAuthorize: false,
	loading: false,
	loadingProgress: 0,
	alert: null
};

export const appReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case LOGIN:
			return { ...state, isAuthorize: true };
		case LOGOUT:
			return { ...state, isAuthorize: false };
		case SHOW_LOADER:
			return { ...state, loading: true, loadingProgress: 0 };
		case HIDE_LOADER:
			return { ...state, loading: false, loadingProgress: 100 };
		case LOADER_PROGRESS:
			return { ...state, loadingProgress: action.payload };
		case SHOW_ALERT:
			return { ...state, alert: action.payload };
		case HIDE_ALERT:
			return { ...state, alert: null };
		default: return state;
	}
}