import React, { useState } from 'react';

export const myContext = React.createContext({
	counter: 0
});

const CompProvider = ({ children }) => {
	const [ counter, setCounter ] = useState(0);
	return <myContext.Provider value={{ counter, setCounter }}>{children}</myContext.Provider>;
};

export default CompProvider;
