import React from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import { State, Action } from 'shared/interface';
import { createAction } from 'shared/utility';
import * as actionTypes from 'store/action-types';
import NotificationComponent from './notificationComponent';

interface MapStateProps {
	type: string;
	message: string;
}

interface DispatchProps {
	closeNotification: () => void;
}

type OwnProps = MapStateProps & DispatchProps;

const Notification: React.FC<OwnProps> = props => {
	return <NotificationComponent type={props.type} message={props.message} closeNotification={props.closeNotification} />;
};
const mapStateToProps = (state: State): MapStateProps => ({
	...state.common.notification
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => ({
	closeNotification: () => dispatch(createAction(actionTypes.REMOVE_NOTIFICATION))
});

export default connect<MapStateProps, DispatchProps, {}, State>(mapStateToProps, mapDispatchToProps)(Notification);
