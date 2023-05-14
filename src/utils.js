export function random(min, max) {
	return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export const pianoKeyAudio = {
	a: 'http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav',
	s: 'http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav',
	d: 'http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav',
	f: 'http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav',
	j: 'http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav',
	k: 'http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav',
	l: 'http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav',
	';': 'http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav',
};
