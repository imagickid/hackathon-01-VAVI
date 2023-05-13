import { Module } from '../core/module';

export class BackgroundModule extends Module {
	constructor(text) {
		super('module3', text);
	}

	trigger() {
		const ChangeBackground = () => {
			document.body.style.background =
				'#' +
				(Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
		};

		document.addEventListener('DOMContentLoaded', ChangeBackground);
		return ChangeBackground();
	}
}
