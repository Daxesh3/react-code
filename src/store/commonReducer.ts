import { Action, CommonState } from 'shared/interface';
import * as actionTypes from './action-types';

const initialState: CommonState = {
	notification: {
		type: '',
		message: ''
	}
};

const reducer = (state: CommonState = initialState, action: Action) => {
	switch (action.type) {
		case actionTypes.ADD_NOTIFICATION:
			return {
				...state,
				notification: {
					type: action.payload.type,
					message: action.payload.message
				}
			};
		case actionTypes.REMOVE_NOTIFICATION:
			return {
				...state,
				notification: {
					type: '',
					message: ''
				}
			};
		default:
			return state;
	}
};

export default reducer;
