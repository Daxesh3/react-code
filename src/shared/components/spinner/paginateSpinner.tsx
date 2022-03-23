import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './spinner.scss';

/**
 * PaginateSpinner - render spinner
 */
const PaginateSpinner: React.FC<{}> = () => {
	return (
		<div className='spinner-wrapper paginate'>
			<CircularProgress />
		</div>
	);
};

export default PaginateSpinner;
