import React from 'react';
import Scrollbars, { ScrollbarProps } from 'react-custom-scrollbars';

/**
 * CustomScrollbars - custom scrollbar component
 */
const CustomScrollbars = (props: ScrollbarProps) => (
	<Scrollbars
		{...props}
		autoHide
		renderTrackHorizontal={(props: any) => <div {...props}
			style={{ display: 'none' }}
			className="track-horizontal"
		/>}
	/>
);

export default CustomScrollbars;
