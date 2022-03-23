import { combineReducers } from 'redux';

import login from 'features/login/store/login.reducer';
import common from './commonReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import { State, Action } from 'shared/interface';

const appReducer = combineReducers({
	auth: login,
	common: common,
	loading: loadingReducer,
	error: errorReducer,
});

const rootReducer = (state: State | undefined, action: Action) => {
	if (action.type === 'LOGOUT') {
		state = undefined;
	}
	return appReducer(state, action);
};

export default rootReducer;
