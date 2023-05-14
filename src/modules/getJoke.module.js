import { Module } from '../core/module';
import { getData } from '../helper';
import { timeout } from '../helper';

export class JokeModule extends Module {
	constructor(text) {
		super('module6', text);
	}

	async trigger() {
		const body = document.querySelector('body');
		const div = document.createElement('div');
		div.classList.add('fadeIn');
		div.textContent = await getData();
		body.append(div);
		timeout(div);
	}
}
