import React from 'react';
import ReactPaginate from 'react-paginate';

interface SelectedItem {
	selected: number;
}

interface Paginate {
	loading: boolean;
	total: number;
	page?: number;
	pageSize: number;
	isRightAlign?: boolean;
	handlePageChange: (selectedItem: SelectedItem) => void;
}
/**
 * Paginate - render pagination
 */
const Paginate: React.FC<Paginate> = props => {
	const isRightAlign = props.isRightAlign ? 'justify-content-end' : '';
	return (
		<div className={`${props.loading ? 'disabled-paginate' : ''}`}>
			<ReactPaginate
				pageCount={Math.ceil(props.total / props.pageSize)}
				forcePage={props.page}
				pageRangeDisplayed={4}
				marginPagesDisplayed={2}
				previousLabel={<i className='zmdi zmdi-chevron-left zmdi-hc-2x' />}
				nextLabel={<i className='zmdi zmdi-chevron-right zmdi-hc-2x' />}
				breakLabel={'...'}
				breakClassName={'break-me'}
				onPageChange={props.handlePageChange}
				containerClassName={`pagination ${isRightAlign}`}
				activeClassName={'active'}
				pageClassName={'page-item'}
				previousClassName={'icon-wrapper'}
				nextClassName={'icon-wrapper'}
				disabledClassName={'disabled'}
			/>
		</div>
	);
};

export default Paginate;
