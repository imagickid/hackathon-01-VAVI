import { Module } from '../core/module';

export class PianoModule extends Module {
	constructor(text) {
		super('module2', text);
		this.container = document.querySelector('body');
	}

	trigger() {
		const piano = document.createElement('div');
		piano.style.height = '450px';
		piano.style.width = '700px';
		piano.style.background = '#000';
		this.container.append(piano);
	}
}
