import '../styles.css';
import { Module } from '../core/module';
import { randomParams } from '../helper';
import { randomColor } from '../helper';
import { timeout } from '../helper';

export class RainModule extends Module {
	constructor(text) {
		super('rainModule', text);
		this.container = document.querySelector('body');
	}

	trigger() {
		const quantity = 101;
		let n = 0;

		while (n < quantity) {
			const drop = document.createElement('div');
			drop.classList.add('drop');
			drop.style.height = randomParams().height;
			drop.style.background = `linear-gradient(transparent, ${randomColor()})`;
			drop.style.left = randomParams().onScreenXPosition;
			drop.style.animationDelay = randomParams().dropDelay;
			drop.style.animationDuration = randomParams().dropDuration;

			this.container.append(drop);
			n++;
			timeout(drop);
		}
	}
}
