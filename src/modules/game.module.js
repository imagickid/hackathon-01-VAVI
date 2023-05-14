import { Module } from '../core/module';

export class Game extends Module {
	#clickCounter;
	#scoreAirplane;
	#windowPosition;

	constructor(text) {
		super('gameModule', text);
		this.gameBody = document.createElement('div');
		this.gameBody.classList.add('game-body');
		this.main = document.createElement('div');
		this.main.classList.add('main');
		this.main.insertAdjacentHTML(
			'afterbegin',
			`
    <div class="section-click open">
      <form class="form-timer">
        <label for="timer" class="form-timer__text">Enter game time</label>
        <input
          id="timer"
          type="text"
          name="time"
          value="3"
          placeholder="seconds"
        />
        <button type="submit" class="btn">Start</button>
      </form>
    </div>

    <div class="bot-panel">

      <div class="section-timer">
        <img src="../src/assets/timer.png" alt="" class="section-timer__img none-select">
        <p class="section-timer__text none-select">0</p>
      </div>

      <div class="counters">
        <div class="shoots">
          <img class="image-patrons none-select" src="../src/assets/bomb.png" alt="" />
          <p class="shoots-text none-select">0</p>
        </div>
        <div class="hits">
          <img class="image-hits none-select" src="../src/assets/hits.png" alt="" />
          <p class="hits-text none-select">0</p>
        </div>
      </div>

    </div>`,
		);
		this.gameBody.appendChild(this.main);
		document.body.appendChild(this.gameBody);

		this.#clickCounter = 0;
		this.#scoreAirplane = 0;

		this.#windowPosition = {
			top: window.pageYOffset,
			left: window.pageXOffset,
			right: window.pageXOffset + document.documentElement.clientWidth,
			bottom: window.pageYOffset + document.documentElement.clientHeight,
		};
	}

	getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}

	#addClickListener() {
		window.addEventListener('click', () => {
			this.#clickCounter++;
			const shoots = this.main.querySelector('.shoots-text');
			shoots.textContent = `${this.#clickCounter}`;
		});
	}

	#createBang(sizeAirplane, posAir) {
		const bang = document.createElement('img');

		bang.classList.add('bang');
		bang.classList.add('none-select');
		bang.src = '../src/assets/bang.png';

		const sizeBang = sizeAirplane * 1.1;
		bang.style.height = sizeBang + 'px';
		bang.style.width = sizeBang + 'px';
		this.gameBody.append(bang);

		bang.style.left = posAir.x + 'px';
		bang.style.top = posAir.y + 'px';

		setTimeout(() => {
			bang.remove();
		}, 500);
	}

	#createAirplane() {
		const airplane = document.createElement('div');
		airplane.classList.add('airplane');
		airplane.style.backgroundImage = 'url(../src/assets/airplane.png)';

		const size = this.getRandomArbitrary(100, 200);
		airplane.style.position = 'absolute';
		airplane.style.height = size / 4 + 'px';
		airplane.style.width = size + 'px';
		this.gameBody.append(airplane);

		let startX = this.getRandomArbitrary(-70, -100);
		airplane.style.transform = `translateX(${startX}px)`;
		airplane.style.top = this.getRandomArbitrary(0, 75) + '%';

		const speed = this.getRandomArbitrary(6, 10);
		const interval = setInterval(() => {
			startX = startX + speed;
			const currentAirplaneX = airplane.getBoundingClientRect();

			if (currentAirplaneX.x <= this.#windowPosition.right * 0.95) {
				airplane.style.transform = `translate(${startX}px)`;
			} else {
				airplane.remove();
				clearInterval(interval);
			}
		}, 25);

		airplane.addEventListener('click', (event) => {
			const positionAriplane = {
				x: event.clientX,
				y: event.clientY,
			};
			airplane.remove();
			this.#createBang(size, positionAriplane);
			this.#scoreAirplane++;

			const hits = this.main.querySelector('.hits-text');
			hits.textContent = `${this.#scoreAirplane}`;
		});
	}

	#startTimer(time) {
		const timerElement = this.main.querySelector('.section-timer__text');
		let second = time;
		timerElement.textContent = `${second}`;

		let timerInterval;
		timerInterval = setInterval(() => {
			second--;
			timerElement.textContent = `${second}`;

			if (second === -1) {
				clearInterval(timerInterval);
				timerElement.textContent = '';

				const airplaneElements = this.gameBody.querySelectorAll('.airplane');

				airplaneElements.forEach((airplane) => {
					const pos = airplane.getBoundingClientRect();
					airplane.remove();
					this.#createBang(100, pos);
				});

				const finishGame = document.createElement('div');
				const pElement = document.createElement('p');
				finishGame.classList.add('finish-game');
				pElement.textContent = 'Time is over! :3';
				finishGame.append(pElement);
				this.gameBody.append(finishGame);
				setTimeout(() => {
					this.gameBody.classList.remove('open');
					location.reload();
				}, 3000);
			}
		}, 1000);
	}

	#addFormSubmitListener() {
		const formTimer = this.main.querySelector('.form-timer');
		formTimer.addEventListener('submit', (event) => {
			event.preventDefault();

			const time = formTimer.elements.time.value;
			const sectionClick = this.main.querySelector('.section-click');

			sectionClick.classList.remove('open');
			this.#startTimer(time);

			const timeForClick = setInterval(() => {
				this.#createAirplane();
				setTimeout(() => {
					clearInterval(timeForClick);
				}, time * 1000);
			}, this.getRandomArbitrary(300, 700));
		});
	}

	trigger() {
		this.gameBody.classList.add('open');
		this.#addClickListener();
		this.#addFormSubmitListener();
	}
}
