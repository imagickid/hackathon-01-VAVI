import { Module } from '../core/module';
import * as d3 from 'd3';
import { timeout } from '../helper';
// для работы требуется библиотеки D3, в терминале пишем:
// npm install d3 --save

export class FreeShape extends Module {
	constructor(text) {
		super('module5', text);
		this.container = document.querySelector('body');
	}

	trigger() {
		if (document.querySelector('svg')) document.querySelector('svg').remove();
		const html = `
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			viewBox="0 0 500 500"
			width="500"
			height="500"
		></svg>
		`;

		this.container.insertAdjacentHTML('beforeend', html);

		let n = 5;
		let f = 1.5;
		let color =
			'#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

		const mapX = d3.scaleLinear().domain([-1, 1]).range([100, 400]);
		const mapY = d3.scaleLinear().domain([-1, 1]).range([100, 400]);
		const svg = d3.select('svg');

		const path = d3
			.line()
			.x((d) => mapX(d.x))
			.y((d) => mapY(d.y))
			.curve(d3.curveBasisClosed);

		const thePath = svg.append('path');

		const draw = () => {
			const data = d3.range(n).map((d, i) => {
				const w = (Math.PI * 2) / n;
				const a = w * i;
				const x = Math.cos(a) + (Math.random() * f - f / 2);
				const y = Math.sin(a) + (Math.random() * f - f / 2);
				return { x, y };
			});

			thePath.transition().attr('d', path(data)).style('fill', color);
			timeout(document.querySelector('svg'));
		};

		draw();
	}
}
