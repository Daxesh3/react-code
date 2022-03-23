import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './spinner.scss';

/**
 * Spinner - render spinner
 */
const Spinner: React.FC<{}> = () => {
	return (
		<div className='spinner-wrapper'>
			<CircularProgress />
		</div>
	);
};

export default Spinner;
