import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import userPlaceholder from 'assets/images/profile-ph.png';
import { NavLink } from 'react-router-dom';

interface UserInfoProps {
	onLogout: () => void;
}

/**
 * UserInfo - render user info 
 */
class UserInfo extends Component<UserInfoProps> {
	state = {
		anchorEl: null,
		open: false,
	};

	/**
	 * handle user info click
	 */
	handleClick = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void => {
		this.setState({ open: true, anchorEl: e.currentTarget });
	}

	/**
	 * handle user info menu
	 */
	handleRequestClose = () => {
		this.setState({ open: false });
	}

	/**
	 * handle logout
	 */
	handleLogout = () => {
		this.props.onLogout();
		this.handleRequestClose();
	}

	render() {
		return (
			<div className='user-profile d-flex flex-row align-items-center'>
				<Avatar
					alt='...'
					src={userPlaceholder}
					className='user-avatar '
				/>
				<div className='user-detail'>
					<h4 className='user-name' onClick={this.handleClick}>Admin <i
						className='zmdi zmdi-caret-down zmdi-hc-fw align-middle' />
					</h4>
				</div>
				<Menu className='user-info'
					id='simple-menu'
					anchorEl={this.state.anchorEl}
					open={this.state.open}
					onClose={this.handleRequestClose}
					disableAutoFocusItem={true}
					PaperProps={{
						style: {
							minWidth: 120,
							paddingTop: 0,
							paddingBottom: 0
						}
					}}
				>
					<NavLink to='/profile'>
						<MenuItem onClick={this.handleRequestClose}>
							<i className='zmdi zmdi-account zmdi-hc-fw mr-2' />
							Profile
						</MenuItem>
					</NavLink>
					<MenuItem onClick={this.handleLogout}>
						<i className='zmdi zmdi-sign-in zmdi-hc-fw mr-2' />
						Logout
					</MenuItem>
				</Menu>
			</div>
		);
	}
}

export default UserInfo;
