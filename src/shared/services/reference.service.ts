let refs: React.RefObject<HTMLDivElement> | any;

/**
 * getRef - get html element reference
 */
const getRef = () => {
	return refs ? refs.current : null;
};

/**
 * setRef - set html element reference
 */
const setRef = (ref: React.RefObject<HTMLDivElement> | any) => {
	refs = ref;
};

export {
	getRef,
	setRef
};
