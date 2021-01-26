import { GET_USERS, CREATE_USER } from './actionTypes';
import { IUser } from './../typescript';

const initialState = {
	list: new Array<IUser>()
};

if (initialState.list.length == 0) {
	for (let i = 0; i < 6; i++) {
		initialState.list.push({
			id: i,
			avatar: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNITEz8DwAEbQIj5vmLagAAAABJRU5ErkJggg==',
			email: '\xa0',
			first_name: '\xa0',
			last_name: '\xa0'
		});
	}
}

export const usersReducer = (state: any = initialState, action: any) => {
	switch (action.type) {
		case CREATE_USER:
			return { ...state, list: state.list.concat(action.payload) };
		case GET_USERS:
			return { ...state, list: state.list.splice(0, 0).concat(action.payload) };
		default: return state;
	}
}