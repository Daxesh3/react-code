import * as actionTypes from 'store/action-types';
import { AuthState, Action } from 'shared/interface';
import AuthService from 'shared/services/auth.service';

const initialState: AuthState = {
	auth: AuthService.checkLogin(),
	isPasswordResetRequested: false,
	isPasswordReset: false
};

const reducer = (state: AuthState = initialState, action: Action): AuthState => {
	switch (action.type) {
		case actionTypes.AUTH_SUCCESS:
			return {
				...state,
				auth: true
			};
		case actionTypes.PASSWORD_RESET_INST_SUCCESS:
			return {
				...state,
				isPasswordResetRequested: true
			};
		case actionTypes.PASSWORD_RESET_SUCCESS:
			return {
				...state,
				isPasswordReset: true
			};
		case actionTypes.LOGOUT:
			return {
				...state,
				auth: false
			};
		case 'CLEAR_PASSWORD_RESET_INST':
			return {
				...state,
				isPasswordResetRequested: false,
				isPasswordReset: false
			};
		default:
			return state;
	}
};
export default reducer;
