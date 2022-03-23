
export interface AuthState {
	auth: boolean;
	isPasswordResetRequested: boolean;
	isPasswordReset: boolean;
}

export interface LoadingState {
	api: {
		[key: string]: boolean;
	};
}

export interface ErrorState {
	api: {
		[key: string]: string;
	};
}

export interface State {
	auth: AuthState;
	common: CommonState;
	loading: LoadingState;
	error: ErrorState;
}

export interface CommonState {
	notification: {
		type: string;
		message: string;
	};
}

export interface LoaderState {
	loading: boolean;
}

export interface ActionLoaderState {
	actionLoading: boolean;
}

export interface ErrState {
	error: boolean;
}

export interface Action {
	type: string;
	payload: any;
}

export interface NotificationStateProps {
	addNotification: (message: string, type: string) => void;
}