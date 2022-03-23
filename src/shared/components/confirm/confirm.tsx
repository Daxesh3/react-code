import React from 'react';
import Modal, { ModalProps } from '../modal/modal';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormSpinner from '../spinner/formSpinner';

interface Props {
	message: string;
	handleConfirm: () => void;
	loading?: boolean;
}

/**
 * Confirm - confirmation dialog modal popup component
 */
const Confirm = (props: ModalProps & Props) => {
	return (
		<Modal show={props.show} handleClose={() => { }}>
			<FormSpinner isSubmitting={props.loading || false}>
				<DialogTitle>{props.message}</DialogTitle>
				<DialogActions>
					<Button disabled={props.loading} onClick={props.handleClose} variant='contained'>cancel</Button>
					<Button disabled={props.loading} onClick={props.handleConfirm} variant='contained' className='bg-blue text-white' autoFocus>ok</Button>
				</DialogActions>
			</FormSpinner>
		</Modal>
	);
};

export default Confirm;
