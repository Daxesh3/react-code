import { AuthState } from 'shared/interface';

export interface UserLoginData {
	email: string;
	password: string;
}

export interface ForgotPasswordData {
	email: string;
}

export interface ResetPasswordData {
	token?: string;
	password: string;
}

export interface LoginDispatchProps {
	onLogin: (payload: UserLoginData) => void;
}

export interface LoginMapStateProps extends AuthState {
	loading: boolean;
	error: boolean;
}

export interface LoginResponse {
	session: {
		token: string;
	},
	user: {
		email: string;
		id: string;
		isActive: boolean;
		userName: string;
	}
}
