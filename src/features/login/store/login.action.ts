import { ThunkDispatch } from 'redux-thunk';
import * as actionTypes from 'store/action-types';
import AuthService from 'shared/services/auth.service';
import HttpService from 'shared/services/http.service';
import { API_CONFIG } from 'shared/constants/api';
import { createAction } from 'shared/utility';
import { Action } from 'shared/interface';
import { LoginResponse, UserLoginData, ForgotPasswordData } from '../interface/login.interface';

/**
 * login - to login user
 * @param params - user email and password
 */
const login = (data: UserLoginData) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.AUTH_INIT));
		HttpService.post(`v1/${API_CONFIG.path.login}`, data).then((response: { data: LoginResponse }) => {
			AuthService.setAuthData(response.data);
			dispatch(createAction(actionTypes.AUTH_SUCCESS, response.data));
		}).catch((err: Error) => {
			dispatch(createAction(actionTypes.AUTH_FAIL, { error: err.message || '' }));
		});
	};
};

/**
 * forgotPassword - request for reset password link
 * @param params - user email
 */
const forgotPassword = (data: ForgotPasswordData) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		// dispatch(createAction(actionTypes.PASSWORD_RESET_INST_INIT));
		// HttpService.post(`v1/${API_CONFIG.path.forgotPassword}`, data).then((response: any) => {
		// 	dispatch(createAction(actionTypes.PASSWORD_RESET_INST_SUCCESS));
		// 	dispatchActionAfterTime(dispatch, 'CLEAR_PASSWORD_RESET_INST', 2000);
		// }).catch((err: Error) => {
		// 	dispatch(createAction(actionTypes.PASSWORD_RESET_INST_FAIL, { error: err.message || '' }));
		// });
	};
};

/**
 * changePassword - change user password
 * @param params - password and newPassword
 */
const changePassword = (password: string, newPassword: string) => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		// dispatch(createAction(actionTypes.PASSWORD_CHANGE_INIT));
		// HttpService.put(`v1/${API_CONFIG.path.changePassword}`, { password, newPassword }).then(() => {
		// 	dispatch(createAction(actionTypes.PASSWORD_CHANGE_SUCCESS, { message: 'Password has been changed successfully' }));
		// 	dispatch(createAction(actionTypes.CLOSE_MODAL));
		// }).catch((err: Error) => {
		// 	dispatch(createAction(actionTypes.PASSWORD_CHANGE_FAIL, { error: err.message || '' }));
		// });
	};
};

/**
 * logout - logging out user
 */
const logout = () => {
	return (dispatch: ThunkDispatch<{}, {}, Action>) => {
		dispatch(createAction(actionTypes.LOGOUT));
		// HttpService.post(`v1/${API_CONFIG.path.logout}`).then((response: any) => { }).catch((err: Error) => { });
		AuthService.removeAuthData();
	};
};

export {
	login,
	logout,
	forgotPassword,
	changePassword
};
