import { ErrorState, Action } from 'shared/interface';

const errorReducer = (state: ErrorState = { api: {} }, action: Action): ErrorState => {
	const { type, payload } = action;
	const matches = /(.*)_(INIT|SUCCESS|FAIL)/.exec(type);

	// not a *INIT / *_SUCCESS /  *_FAIL actions, so we ignore them
	if (!matches) { return state; }

	const [, requestName, requestState] = matches;
	return {
		...state,
		// Store whether a request is happening at the moment or not
		api: {
			...state.api,
			[requestName]: requestState === 'FAIL' ? payload.error : '',
		}
	};
};

export default errorReducer;
