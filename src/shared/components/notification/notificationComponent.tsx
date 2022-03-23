import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
	type: string;
	message: string;
	closeNotification: () => void;
}

const NotificationComponent: React.FC<Props> = props => {
	if (props.message) {
		// make first letter of msg capital, and the rest as they are
		const msg = `${props.message[0].toUpperCase()}${props.message.substr(1)}`;
		if (props.type === 'success') {
			toast.success((msg), { toastId: `${Math.random()}` });
		} else if (props.type === 'danger') {
			toast.error((msg), { toastId: `${Math.random()}` });
		}
	}
	if (props.type) {
		setTimeout(props.closeNotification, 2000);
	}
	return (
		<ToastContainer
			position='top-right'
			autoClose={4000}
			newestOnTop={false}
			closeOnClick
			hideProgressBar
			rtl={false}
			draggable
			pauseOnHover
		/>
	);
};

export default NotificationComponent;
