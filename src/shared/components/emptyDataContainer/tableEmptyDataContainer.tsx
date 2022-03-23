import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import EmptyDataContainer from '../emptyDataContainer/emptyDataContainer';

/**
 * TableEmptyContainer - empty table data text container component
 */
const TableEmptyContainer: React.FC<{ text?: string, colSpan: number }> = (props) => (
	<TableRow>
		<TableCell colSpan={props.colSpan}>
			<EmptyDataContainer
				text={props.text || "No data found"} />
		</TableCell>
	</TableRow>
)

export default TableEmptyContainer;
