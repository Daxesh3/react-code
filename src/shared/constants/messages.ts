/**
 * errorMessages - list of common error messages
 */
const errorMessages = {
	required: (field: string) => `${field} is required!`,
	trim: (field: string) => `${field} must not contain white space at starting or end position!`,
	minLength: (field: string, length: number) => `${field} has to be longer than ${length} characters!`,
	maxLength: (field: string, length: number) => `${field} has to be shorter than ${length} characters!`,
	minValue: (field: string, value: number) => `${field} must be greater than or equal to ${value}`,
	maxValue: (field: string, value: number) => `${field} must be less than or equal to ${value}`,
	positiveValue: (field: string) => `${field} must be greater than zero`,
	customEmailMessage: () => `Please enter valid email!`,
	customPasswordMessage: () => `Password must contain 1 Small Character, 1 Upper character, 1 special character and min length should be 8.`,
	customConfirmPasswordMessage: () => `Confirm password should be same as password`,
	stringShouldIncludeDot: () => `Domain name is mandatory`,
	expiryDate: () => `ExpiryDate is mandatory`
};

/**
 * customMessages - list of custom messages
 */
const customMessages = {
	logout: () => `Are you sure you want to logout?`,
	confirmDelete: (field: string) => `Are you sure you want to remove this ${field}?`,
}

export {
	errorMessages,
	customMessages
}
