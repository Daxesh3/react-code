import React, { Component, createRef } from 'react';

import Header from 'shared/components/header/header';
import Sidebar from 'shared/components/sidenav/sidenav';
import { setRef } from 'shared/services/reference.service';

/**
 * Layout - Base layout of application
 */
class Layout extends Component {

	state = {
		isSideBarOpen: false,
	};
	componentDidMount = () => {
		if (this.containerRef.current) {
			setRef(this.containerRef);
		}
	}
	private containerRef: React.RefObject<HTMLDivElement> = createRef();
	toggleSideBar = () => this.setState({ isSideBarOpen: !this.state.isSideBarOpen });

	render() {
		return (
			<div className={`app-container ${this.state.isSideBarOpen ? '' : 'small-side-bar'}`}>
				<Sidebar />
				<div className='app-main-container'>
					<div className='app-header'>
						<Header toggleSideBar={this.toggleSideBar} />
					</div>
					<main ref={this.containerRef} className='app-main-content-wrapper'>
						<div className='app-main-content'>
							<div className='app-wrapper'>
								{this.props.children}
							</div>
						</div>
					</main>
				</div>
			</div>
		);
	}
}

export default Layout;
