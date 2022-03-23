import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import SidenavContent from './sidenavContent/sidenavContent';
import UserInfo from 'shared/components/userInfo/userInfo';
import Confirm from '../confirm/confirm';
import { customMessages } from 'shared/constants/messages';
import * as LoginActions from 'features/login/store/login.action';
import { Action } from 'shared/interface';
import * as actionTypes from 'store/action-types';
import { createAction } from 'shared/utility';
import './sidenav.scss';

interface DispatchProps {
	logout: () => void;
	sidenavClick: () => void;
}

/**
 * SideNav - render user info and links
 */
class SideNav extends PureComponent<RouteComponentProps & DispatchProps> {
	state = {
		open: false,
		action: ''
	};

	/**
	 * handleModalState - manage modal state
	 * @param val - isModalOpen or not
	 */
	handleModalState = (val: boolean) => this.setState({ open: val, action: '' });

	/**
	 * open confirmation dialog to logout user
	 */
	onLogout = () => this.setState({ open: true, action: 'logout' });

	/**
	 * handle user logout
	 */
	logout = () => {
		this.props.logout();
		this.props.history.push('/login');
	}

	render() {
		const drawerStyle = 'd-xl-flex d-flex';
		const type: 'permanent' | 'persistent' | 'temporary' = 'permanent';
		return (
			<div className={`app-sidebar d-none ${drawerStyle}`}>
				<Drawer className='app-sidebar-content'
					variant={type}
					open={true}
					classes={{ paper: 'side-nav' }}
				>
					<UserInfo onLogout={this.onLogout} />
					<SidenavContent sidenavClick={this.props.sidenavClick} />
					{this.state.action === 'logout' &&
						<Confirm
							handleConfirm={this.logout}
							show={this.state.open}
							handleClose={() => this.handleModalState(false)}
							loading={false}
							message={customMessages.logout()} />
					}
				</Drawer>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, Action>): DispatchProps => ({
	logout: () => dispatch(LoginActions.logout()),
	sidenavClick: () => dispatch(createAction(actionTypes.SIDENAV_CLICK))
});

export default withRouter(connect<{}, DispatchProps, {}, {}>(null, mapDispatchToProps)(SideNav));
