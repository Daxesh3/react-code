// tslint:disable: no-unsafe-any
// tslint:disable: no-any
import React, { CSSProperties } from 'react';
import Select from 'react-select';
import { ValueType } from 'react-select/lib/types';

interface OptionInfo {
	label: string;
	value: string;
}

interface Props {
	options: OptionInfo[];
	selectedValue: OptionInfo;
	onChangeSelectValue: (selected: OptionInfo | OptionInfo[]) => void;
	placeholder?: string;
	isMulti?: boolean;
	isClearable?: boolean;
}

const customStyles = {
	option: (base: CSSProperties, state: any) => ({
		...base,
		'borderBottom': '1px solid #e7e7e7',
		'color': 'black',
		'padding': 8,
		'backgroundColor': state.isSelected ? '#e7e7e7' : '',
		':active': {
			backgroundColor: '#e7e7e7'
		},
		':hover': {
			backgroundColor: '#e7e7e7'
		},
		':focus': {
			backgroundColor: '#e7e7e7',
			outline: 0,
		}
	}),
	menu: (base: CSSProperties) => ({
		...base,
		zIndex: 3
	}),
	menuList: (base: CSSProperties) => ({
		...base,
		padding: 0
	}),
	clearIndicator: (base: CSSProperties) => ({
		...base,
		cursor: 'pointer'
	}),
	control: () => ({
		// none of react-selects styles are passed to <View />
		display: 'flex',
		width: '100%',
		minHeight: '40px !important',
		border: '1px solid #cccccc',
		padding: '0px !important',
		marginTop: '5px'
	}),
	singleValue: (base: CSSProperties, state: any) => {
		const transition = 'opacity 300ms';

		return { ...base, transition: transition };
	}
};

const reactSelect: React.FC<Props> = props => {
	return (
		<Select
			className='select-dropdown'
			placeholder={props.placeholder}
			value={Object.keys(props.selectedValue).length > 0 ? props.selectedValue : null}
			onChange={(selected: ValueType<any>) => {
				return props.onChangeSelectValue({ label: selected.label, value: selected.value });
			}}
			options={props.options}
			getOptionLabel={option => option.label}
			getOptionValue={option => option.value}
			styles={customStyles}
			closeMenuOnSelect={true}
			isSearchable
			isMulti={props.isMulti}
			isClearable={props.isClearable}
		/>
	);
};

export default reactSelect;
