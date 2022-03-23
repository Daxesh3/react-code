import React from 'react';
import './emptyDataContainer.css';

interface Props {
	text: string
}

/**
 * EmptyDataContainer - empty data text container component
 */
const EmptyDataContainer: React.FC<Props> = (props) => {
	return (
		<div className="empty-data-wrapper">
			{props.text}
		</div>
	)
}

export default EmptyDataContainer;
