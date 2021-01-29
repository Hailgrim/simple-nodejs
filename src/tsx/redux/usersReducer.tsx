import { GET_USERS, CREATE_USER } from './actionTypes';
import { IUser } from '../types';

const initialState = {
	list: new Array<IUser>(),
	page: 1,
	total_pages: 1
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
			return {
				...state,
				list: state.list.concat(action.payload)
			};
		case GET_USERS:
			return {
				...state,
				list: action.payload.data,
				page: action.payload.page,
				total_pages: action.payload.total_pages
			};
		default: return state;
	}
}