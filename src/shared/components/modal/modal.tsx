import React from 'react';
import Dialog from '@material-ui/core/Dialog';

export interface ModalProps {
	show: boolean;
	handleClose?: React.ReactEventHandler<{}>;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	className?: string;
}

/**
 * Modal - common modal component
 */
const Modal: React.FC<ModalProps> = (props) => {
	return (
		<Dialog
			fullWidth={true}
			open={props.show}
			onClose={props.handleClose}
			maxWidth={props.maxWidth ? props.maxWidth : 'sm'}
			className={props.className}
		>
			{props.children}
		</Dialog>
	);
};

export default Modal;
