export const randomColor = () => {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const timeout = (element) =>
	setTimeout(() => {
		element.remove();
	}, 5000);

export const randomParams = () => {
	const randomNumber = Math.random();
	return {
		height: '111px',
		onScreenXPosition: Math.floor(randomNumber * window.innerWidth) + 'px',
		dropDelay: randomNumber * -10 + 's',
		dropDuration: randomNumber * 7 + 's',
	};
};

export const getData = async () => {
	try {
		const res = await fetch('https://icanhazdadjoke.com/', {
			headers: {
				Accept: 'application/json',
			},
		});
		const data = await res.json();
		return data.joke;
	} catch (err) {
		console.error(err);
	}
};
