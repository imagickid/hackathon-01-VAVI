import { Module } from '../core/module';
import CLEAR from '../assets/clear.png';
import CLOUD from '../assets/cloud.png';
import MIST from '../assets/mist.png';
import RAIN from '../assets/rain.png';
import SNOW from '../assets/snow.png';

export class WeatherModule extends Module {
	#APIkey;
	#city;
	#url;

	constructor(text) {
		super('weatherModule', text);

		this.box = document.createElement('div');
		this.box.classList.add('box');
		this.box.insertAdjacentHTML(
			'afterbegin',
			`
			<p class="hiden" id="loader">Loading...</p>
			<div class="box-overlay">
				<div class="weather-box">
					<div class="box-header">
						<span class="box-title"></span>
						<span class="close">&times;</span>
					</div>
					<div class="box-body">
						<img src="" class="icon">
						<p class="temperature"></p>
						<p class="description"></p>
					</div>
				</div>
			</div>`,
		);
		document.body.appendChild(this.box);

		this.#APIkey = 'bc89c96cd57a46bddde4e3c659a33c32';
		this.#city = 'Moscow';
		this.#url = `http://api.openweathermap.org/data/2.5/weather?q=${
			this.#city
		}&lang=ru&units=metric&appid=${this.#APIkey}`;
	}

	async #getWeather() {
		try {
			const response = await fetch(this.#url);
			if (!response.ok) {
				throw new Error('Request error');
			}
			const weatherData = await response.json();
			return weatherData;
		} catch (error) {
			console.log(error);
			return null;
		}
	}

	async #displayWeather() {
		try {
			const weather = await this.#getWeather();
			
			const icon = this.box.querySelector('.icon');
			icon.src = this.#chooseIcon(weather.weather[0].main);

			const title = this.box.querySelector('.box-title');
			title.innerHTML = `&#9729; ${this.#city}`;

			const temperature = this.box.querySelector('.temperature');
			temperature.textContent = `${Math.round(weather.main.temp)}°`;

			const description = this.box.querySelector('.description');
			description.textContent = weather.weather[0].main;
		} catch (error) {
			console.log(error);
		} 
	}

	#handleClose() {
		this.box.classList.remove('open');
		this.box.classList.add('hide');
		setTimeout(() => {
			this.box.classList.remove('hide');
		}, 300);
	}

	#chooseIcon(string) {
		switch (string) {
			case 'Clear':
				return CLEAR;

			case 'Rain':
				return RAIN;

			case 'Snow':
				return SNOW;

			case 'Clouds':
				return CLOUD;

			case 'Haze':
				return MIST;

			default:
				return '';
		}
	}

	trigger() {
		this.#displayWeather();
		this.box.classList.add('open');

		const close = this.box.querySelector('.close');
		close.addEventListener('click', () => this.#handleClose());
		close.removeEventListener('click', () => this.#handleClose());
	}
}
