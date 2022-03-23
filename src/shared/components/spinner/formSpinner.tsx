import React from 'react';
import Spinner from '../spinner/spinner';
import './spinner.scss';

const FormSpinner: React.FC<{ isSubmitting: boolean }> = (props) => {
	return (
		<div className='form-loader'>
			{props.children}
			{props.isSubmitting &&
				<div className='form-overlay-loader d-flex align-items-center justify-content-center'>
					<Spinner />
				</div>
			}
		</div>
	);
}

export default FormSpinner;
