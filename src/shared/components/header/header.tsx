import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from 'assets/images/appLogo.png';
import '../sidenav/sidenav.scss';

interface Props {
	toggleSideBar: () => void;
}
/**
 * Header - Header component
 */
class Header extends Component<Props> {
	render() {
		return (
			<AppBar className='app-main-header' position='static'>
				<Toolbar>
					<div className='hamburger-menu-icon d-flex align-items-end'>
						<button type='button' onClick={this.props.toggleSideBar}>
							<i className='zmdi zmdi-menu' />
						</button>
					</div>
					<h2 className='mb-0 mr-auto header-logo'>
						<NavLink className='text-white text-uppercase' to='/' exact>
							<img className='logo' src={logo} alt='portal' title='Play Time' />
							<h3>{process.env.REACT_APP_ENVIRONMENT}</h3>
						</NavLink>
					</h2>
				</Toolbar>
			</AppBar>
		);
	}
}

export default Header;
