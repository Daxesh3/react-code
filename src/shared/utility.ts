import { ThunkDispatch } from 'redux-thunk';
import { Action, NotificationStateProps, State } from './interface';
import * as actionTypes from 'store/action-types';
import _ from 'lodash';
import moment from 'moment';

/**
 * function to move element on specific index in array
 * @param array - array
 * @param old_index - old index of element
 * @param new_index - new index of element
 */
export const arrayMove = (array: any, old_index: number, new_index: number) => {
	if (new_index >= array.length) {
		let k = new_index - array.length + 1;
		while (k--) {
			array.push(undefined);
		}
	}
	array.splice(new_index, 0, array.splice(old_index, 1)[0]);
	return array;
};

/**
 * create action creator
 * @param ACTION - type of action
 * @param data - data
 */
export const createAction = (ACTION: string, data: any = null): Action => {
	return {
		type: ACTION,
		payload: data
	};
};

/**
 * create loading selector
 * @param actions - actions to dispatch
 */
export const createLoadingSelector = (actions: string[]) => (state: State) => {
	// returns true only when all actions is not loading
	return _(actions).some((action: string) => _.get(state, `loading.api.${action}`));
};

/**
 * create error selector
 * @param actions - actions to dispatch
 */
export const createErrorMessageSelector = (actions: string[]) => (state: State) => {
	// returns the first error messages for actions
	// * We assume when any request fails on a page that
	//   requires multiple API calls, we shows the first error
	return _(actions)
		.map(action => _.get(state, `error.api.${action}`))
		.compact()
		.first() || '';
};

/**
 * dispatch action after given time (to handle some events like close modal after success api call)
 * @param dispatch - dispatch object
 * @param action - action type
 * @param time - time after which action is to be dispatched (default - 100ms)
 */
export const dispatchActionAfterTime = (dispatch: ThunkDispatch<{}, {}, Action>, action: string, time: number = 100) => {
	setTimeout(() => {
		dispatch(createAction(action));
	}, time);
};

/**
 * dispatch action after given time (to clear some data like modal open status / notification message)
 * @param dispatch - dispatch object
 * @param doNotDispatchModalAction - to dispatch modal action or not
 */
export const clearAction = (dispatch: ThunkDispatch<{}, {}, Action>, doNotDispatchModalAction: boolean = true) => {
	if (!doNotDispatchModalAction) {
		dispatchActionAfterTime(dispatch, actionTypes.RESET_MODAL_STATUS);
	}
	dispatchActionAfterTime(dispatch, actionTypes.RESET_MESSAGE, 2000);
};

export const debounce = (func: any, wait = 500) => {
	let h: NodeJS.Timeout;
	return (...args: any) => {
		clearTimeout(h);
		h = setTimeout(() => func(...args), wait);
	};
};

export const formatDate = (str: any, format?: string, local?: boolean) => {
	if (!str) {
		return '';
	}
	if (local) {
		return moment(str).local().format(format || 'YYYY-MM-DD');
	}
	return moment(str).format(format || 'YYYY-MM-DD');
};

/**
 * returns actions to dispatch to add the notification
 * @param dispatch - dispatch object
 */
export const getNotificationProps = (dispatch: ThunkDispatch<{}, {}, Action>): NotificationStateProps => {
	return {
		addNotification: (message: string, type: string) => dispatch(createAction(actionTypes.ADD_NOTIFICATION, { message, type }))
	};
};
