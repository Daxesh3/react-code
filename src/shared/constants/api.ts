import isEmpty from 'lodash/isEmpty';
import queryString from 'query-string';

const API_CONFIG = {
	baseUrl: `${process.env.REACT_APP_BASE_URL}`,
	path: {
		login: 'auth',
		logout: 'logout',
	},
};

const getUrl = (url: string, params: any = {}): string => {
	let urlString = `${API_CONFIG.baseUrl}/${url}`;
	if (params && !isEmpty(params)) {
		urlString += `?${queryString.stringify(params)}`;
	}
	return urlString;
};

const reportUrl = process.env.REACT_APP_REPORT_URL || '';

export {
	API_CONFIG,
	getUrl,
	reportUrl,
};
