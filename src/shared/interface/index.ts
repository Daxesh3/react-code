export interface ResponseObj<T> {
	isError: boolean;
	message: string;
	data: T;
}

export interface FieldConfig {
	type: string;
	label: string;
	name: string;
	multiline?: boolean;
	rows?: string;
	component?: string;
	disabled?: boolean;
	classes?: {
		root?: string,
		xl: boolean | 3 | 5 | 1 | 2 | 'auto' | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined,
		md: boolean | 3 | 5 | 1 | 2 | 'auto' | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined,
		xs: boolean | 3 | 5 | 1 | 2 | 'auto' | 4 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined
	};
	options?: (string | number | object | any)[];
}

export interface ReactSelectDropDownValueInfo {
	label: string;
	value: string;
}

export * from './state';
