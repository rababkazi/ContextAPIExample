import React, { useContext } from 'react';
import { myContext } from './CompProvider';

const MyComponent = () => {
	const context = useContext(myContext);

	const onclickhandler = (e) => {
		context.setCounter(context.counter + 1);
	};

	return (
		<div>
			<h3>{context.counter}</h3>
			<button onClick={onclickhandler}>Increment</button>
		</div>
	);
};

export default MyComponent;
