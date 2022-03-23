import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Spinner from './spinner';

/**
 * TableSpinner - render spinner in table cell
 */
const TableSpinner: React.FC<{ colSpan: number }> = props => (
	<TableRow>
		<TableCell colSpan={props.colSpan}>
			<Spinner />
		</TableCell>
	</TableRow>
);

export default TableSpinner;
