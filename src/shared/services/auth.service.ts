import CryptoJS from 'crypto-js';
import { LoginResponse } from 'features/login/interface/login.interface';

const KEY = process.env.REACT_APP_ENCRYPTION_KEY as string;

/**
 * function to check if user is logged in or not
 */
const checkLogin = (): boolean => {
	if (localStorage.authData) {
		return true;
	} else {
		return false;
	}
};

/**
 * function to get user access token
 */
const getAccessToken = (): boolean | string => {
	try {
		const data = localStorage.authData;
		if (data) {
			const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
			const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as LoginResponse;
			return decryptedData && decryptedData.session.token ? decryptedData.session.token : false;
		} else {
			return false;
		}
	} catch (e) {
		return false;
	}
};

/**
 * function to set user authentication data
 */
const setAuthData = (data: LoginResponse): void => {
	const cipherText = CryptoJS.AES.encrypt(JSON.stringify(data), KEY);
	localStorage.setItem('authData', cipherText.toString());
};

/**
 * function to get user authentication data
 */
const getAuthData = (): LoginResponse | {} => {
	const data = localStorage.authData;
	if (data) {
		const bytes = CryptoJS.AES.decrypt(data.toString(), KEY);
		const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		return decryptedData;
	} else {
		return {};
	}
};

/**
 * function to remove user authentication data
 */
const removeAuthData = (): void => {
	localStorage.removeItem('authData');
};

const authService = {
	checkLogin: checkLogin,
	getAccessToken: getAccessToken,
	setAuthData: setAuthData,
	getAuthData: getAuthData,
	removeAuthData: removeAuthData
};

export default authService;
