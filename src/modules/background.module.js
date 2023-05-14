import { Module } from '../core/module';
import { randomColor } from '../helper';
import { timeout } from '../helper';

export class BackgroundModule extends Module {
	constructor(text) {
		super('module3', text);
	}

	trigger() {
		const body = document.querySelector('body');
		body.style.background = randomColor();
		setTimeout(() => {
			body.style.background = '';
		}, 3000);
	}
}
