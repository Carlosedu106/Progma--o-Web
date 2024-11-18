import React, { useState, useEffect } from 'react';
import './App.css';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [isRunning, setIsRunning] = useState(true);

	useEffect(() => {
		let interval;

		if (isRunning) {
			interval = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [isRunning]);

	const stopCounter = () => {
		setIsRunning(false);
	};

	return (
		<div className="counter-container">
			<h1>Contador: {count}</h1>
			<button onClick={stopCounter} disabled={!isRunning}>
				Parar Contador
			</button>
		</div>
	);
};

export default Counter;
