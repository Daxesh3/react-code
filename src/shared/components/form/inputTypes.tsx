import React from 'react';
import moment from 'moment-timezone';
import MomentUtils from '@date-io/moment';
import { FieldProps, FormikValues } from 'formik';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

import Switch from '@material-ui/core/Switch';
import FormControlLabel, { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';

interface TextFieldProps {
	type: string;
	label: string;
	className: string;
	autoComplete: string;
	multiline: boolean;
	rows: string;
	disabled: boolean;
}

interface colorPickerProp {
	selectedColor: (field: string, value: string) => void;
	label: string;
	defaultValue: string;
}

interface FilePickerProps {
	selectedImage: (field: string, value: File) => void;
	selectedAudio: (field: string, value: File) => void;

}

interface CustomImagePickerProps {
	extensions: string[];
	buttonText: string;
	label: string;
	accept: string;
}
/**
 * common input field component
 * @param props { field, form: { touched, errors }, ...props }
 */
const renderInput = (props: FieldProps<FormikValues> & TextFieldProps) => {
	const field = props.field;
	return (
		<TextField
			fullWidth
			type={props.type}
			label={props.label}
			name={field.name}
			value={field.value}
			className={props.className}
			onChange={field.onChange}
			onBlur={field.onBlur}
			autoComplete={props.autoComplete}
			multiline={props.multiline ? props.multiline : false}
			disabled={props.disabled ? props.disabled : false}
			rows={props.multiline ? props.rows : '1'}
		/>
	);
};

/**
 * common switch field component
 * @param props { field, form: { touched, errors }, ...props }
 */
const renderSwitch = (props: FieldProps<FormikValues> & FormControlLabelProps) => {
	const field = props.field;
	return (
		<FormControlLabel
			control={
				<Switch
					disabled={props.disabled}
					checked={field.value}
					value={field.value}
					onChange={field.onChange(field.name)}
					color='primary'
				/>
			}
			label={props.label}
			labelPlacement='start'
			className='ml-0 mt-2'
		/>
	);
};

interface SelectProps {
	label: string;
	selectedValue: string | number;
	options: Array<{ id: string, name: string }>;
	setFieldValue: (field: string, value: string | unknown) => void;
	placeholder: string;
	isClearable?: boolean;
}

/**
 * common select dropdown field component
 * @param props { field, form: {touched, errors}, ... props}
 */
const renderSelect = (props: FieldProps<FormikValues> & SelectProps) => {
	const field = props.field;
	return (
		<FormControl classes={{ root: 'w-100' }} variant='filled'>
			<InputLabel classes={{ shrink: 'shrink' }} >{props.label}</InputLabel>
			<Select value={props.selectedValue}
				inputProps={{
					name: field.name,
				}}
				autoWidth={true}
				classes={{
					selectMenu: 'select-menu',
					outlined: 'outlined',
				}}
				variant='filled'
				onChange={event => {
					props.setFieldValue(field.name, event.target.value as string);
				}}>
				{!props.isClearable && <MenuItem value='' disabled>{props.placeholder}</MenuItem>}
				{props.options.map(opt => (<MenuItem value={opt.id} key={opt.id} >{opt.name}</MenuItem>))}
			</Select>
		</FormControl>
	);
};

interface TimePickerProps {
	label: string;
	defaultValue: string;
	classes?: { [key: string]: string };
	onTimeSelect: (fieldName: string, value: string) => void;
	keyName: string;
}

moment.tz.setDefault('UTC');
class UTCUtils extends MomentUtils {
	format(value: any, formatString: any) {
		return moment(value)
			.utc()
			.format(formatString);
	}
}

/**
 * common field error message component
 * @param props
 */
const fieldErrorMessage = (props: any) => {
	if (props.errorKey && !props.children[props.errorKey]) {
		return null;
	}
	if (typeof props.children === 'string') {
		return (
			<span className='Error'>{props.children}</span>
		);
	}
	return (
		<span className='Error'>
			{props.children[(props.errorKey || Object.keys(props.children)[0])]}
		</span>
	);
}

export {
	renderInput,
	renderSwitch,
	fieldErrorMessage as FieldErrorMessage,
	renderSelect,
	UTCUtils
};
