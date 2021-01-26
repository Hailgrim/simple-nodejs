import { showAlert } from './actions';
import { CREATE_USER } from './actionTypes';

const antiFreak = ['freak', 'фрик'];

export function forbiddenWordsMiddleware(state: any) {
	return function (next: any) {
		return function (action: any) {

			if (action.type === CREATE_USER) {
				if (antiFreak.filter(w => action.payload.first_name.includes(w)).length) return state.dispatch(showAlert('Такое писать нельзя!'));
			}
			return next(action);

		}
	}
}