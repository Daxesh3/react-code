import LoginComponent from '../component/login.component';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import * as LoginActions from '../store/login.action';
import { LoginDispatchProps, LoginMapStateProps, UserLoginData } from '../interface/login.interface';
import { State, Action } from 'shared/interface';
import { createLoadingSelector, createErrorMessageSelector } from 'shared/utility';

/**
 * loading and error selectors, which selects loader
 */
const loadingSelector = createLoadingSelector(['AUTH']);
const errorSelector = createErrorMessageSelector(['AUTH']);

const mapStateToProps = (state: State): LoginMapStateProps => ({
	...state.auth,
	loading: loadingSelector(state),
	error: errorSelector(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): LoginDispatchProps => ({
	onLogin: (payload: UserLoginData) => dispatch(LoginActions.login(payload)),
});

export default connect<LoginMapStateProps, LoginDispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(LoginComponent);
