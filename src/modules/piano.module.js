import { Module } from '../core/module';
import { pianoKeyAudio } from '../utils';

export class PianoModule extends Module {
	constructor(text) {
		super('pianoModule', text);
		this.container = document.querySelector('body');
		this.pianoContainer = document.createElement('div');
		this.pianoContainer.classList.add('piano-container', 'game-body');
		this.piano = `
			<button class="close-piano-btn">x</button>
			<h1>Press keyboard to play piano</h1>
				<div class="piano">
					<div class="pianoKey" data-key="a">A</div>
					<div class="pianoKey" data-key="s">S</div>
					<div class="pianoKey" data-key="d">D</div>
					<div class="pianoKey" data-key="f">F</div>
					<div class="pianoKey" data-key="j">J</div>
					<div class="pianoKey" data-key="k">K</div>
					<div class="pianoKey" data-key="l">L</div>
					<div class="pianoKey" data-key=";">;</div>
				</div>
				`;
		this.pianoContainer.insertAdjacentHTML('beforeend', this.piano);
		this.container.append(this.pianoContainer);
	}

	trigger() {
		this.pianoContainer.classList.remove('game-body');
		const btn = document.querySelector('.close-piano-btn');

		window.addEventListener('keydown', function (e) {
			const key = document.querySelector(`.pianoKey[data-key="${e.key}"]`);
			if (!key) return;

			const pressedKey = Object.entries(pianoKeyAudio).filter((obj) => {
				return obj[0] === e.key;
			});

			const neededAudio = new Audio(`${pressedKey[0][1]}`);

			if (e.key === key.dataset.key) {
				key.classList.add('pressed');
				neededAudio.currentTime = 0;
				neededAudio.play();
			}
		});

		window.addEventListener('keyup', (e) => {
			const key = document.querySelector(`.pianoKey[data-key="${e.key}"]`);
			if (!key) return;
			key.classList.remove('pressed');
		});

		btn.addEventListener('click', () => {
			this.pianoContainer.classList.add('game-body');
		});
	}
}
