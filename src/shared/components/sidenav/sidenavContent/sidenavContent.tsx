import React, { Component } from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import CustomScrollbars from '../../customScrollbars/customScrollbars';

interface Props extends RouteComponentProps {
	sidenavClick: () => void;
}

/**
 * SidenavContent - render side nav link items
 */
class SidenavContent extends Component<Props> {
	render() {
		return (
			<CustomScrollbars className=' scrollbar'>
				<ul className='nav-menu'>
					{/* <li className='nav-header'>
						Reports
					</li>
					<li className='menu no-arrow'>
						<NavLink onClick={this.props.sidenavClick} to='/reports'>
							<i className='zmdi zmdi-file-text zmdi-hc-fw' />
							<span className='nav-text'>
								<span>Reports</span>
							</span>
						</NavLink>
					</li> */}
					{/* <li className='nav-header'>
						CMS
					</li> */}
					{/* <li className='menu no-arrow'>
						<NavLink onClick={this.props.sidenavClick} to='/exercises'>
							<i className='zmdi zmdi-run zmdi-hc-fw' />
							<span className='nav-text'>
								<span>Exercises</span>
							</span>
						</NavLink>
					</li> */}
				</ul>
			</CustomScrollbars>
		);
	}
}

export default withRouter(SidenavContent);
