import axios, { AxiosResponse } from 'axios';
import { ResponseObj } from '../interface';
import AuthService from './auth.service';
import { getUrl } from 'shared/constants/api';

const axiosInstance = axios.create();
export interface AxiosParams {
	method: string;
	url: string;
	data?: any;
	contentType?: string;
	isLogin?: boolean;
}

export interface MiscellaneousRequestParams {
	contentType?: string;
	isLogin?: boolean;
}

/**
 * get method
 * @param request object containing axios params
 */
const get = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
	return commonAxios({ method: 'GET', url: getUrl(url, params), ...otherData });
};

/**
 * post method
 * @param request object containing axios params
 */
const post = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
	return commonAxios({ method: 'POST', url: getUrl(url), data: params, ...otherData });
};

/**
 * put method
 * @param request object containing axios params
 */
const put = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
	return commonAxios({ method: 'PUT', url: getUrl(url), data: params, ...otherData });
};

/**
 * deleteRequest method
 * @param request object containing axios params
 */
const deleteRequest = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
	return commonAxios({ method: 'DELETE', url: getUrl(url), data: params, ...otherData });
};

/**
 * patch method
 * @param request object containing axios params
 */
const patch = (url: string, params: any = {}, otherData: MiscellaneousRequestParams = {}) => {
	return commonAxios({ method: 'PATCH', url: getUrl(url), data: params, ...otherData });
};

/**
 * commonAxios
 * @param object containing method, url, data, access token, content-type, isLogin
 */
const commonAxios = ({
	method,
	url,
	data,
	contentType = 'application/json',
	isLogin = false
}: AxiosParams): Promise<any> => {
	let headers: any = {
		'Content-Type': contentType
	};
	const token = AuthService.getAccessToken();
	if (token) {
		headers['x-access-token'] = token;
	}
	let body: any = null;
	if (isLogin) {
		headers['userdetails'] = data;
	} else {
		if (contentType === 'application/json') {
			body = JSON.stringify(data);
		} else {
			body = data;
		};
	}
	return new Promise((resolve, reject) => {
		axiosInstance({
			method: method,
			url: url,
			headers: headers,
			data: body
		}).then((response: AxiosResponse<ResponseObj<any>>) => {
			if (response.data.isError) {
				reject(new Error(response.data.message));
			} else {
				resolve(response.data);
			}
		}).catch((error) => {
			reject(error);
		});
	});
}

export {
	axiosInstance
};

const httpService = {
	get: get,
	post: post,
	put: put,
	deleteRequest: deleteRequest,
	patch: patch
};

export default httpService;
