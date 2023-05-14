import { Module } from '../core/module';

export class TimeNowdModule extends Module {
	constructor(text) {
		super('module8', text);
	}

	trigger() {
		function watch() {
			const now = new Date();
			const ctx = document.querySelector('#canvas').getContext('2d');
			ctx.save();
			ctx.clearRect(0, 0, 150, 150);
			ctx.translate(75, 75);
			ctx.scale(0.4, 0.4);
			ctx.rotate(-Math.PI / 2);
			ctx.strokeStyle = 'black';
			ctx.fillStyle = 'white';
			ctx.lineWidth = 8;
			ctx.lineCap = 'round';

			ctx.save();
			for (let i = 0; i < 12; i++) {
				ctx.beginPath();
				ctx.rotate(Math.PI / 6);
				ctx.moveTo(100, 0);
				ctx.lineTo(120, 0);
				ctx.stroke();
			}
			ctx.restore();

			ctx.save();
			ctx.lineWidth = 5;
			for (let i = 0; i < 60; i++) {
				if (i % 5 !== 0) {
					ctx.beginPath();
					ctx.moveTo(117, 0);
					ctx.lineTo(120, 0);
					ctx.stroke();
				}
				ctx.rotate(Math.PI / 30);
			}
			ctx.restore();

			const second = now.getSeconds();
			const minute = now.getMinutes();
			const hour = now.getHours() % 12;

			ctx.fillStyle = 'black';

			ctx.save();
			ctx.rotate(
				(Math.PI / 6) * hour +
					(Math.PI / 360) * minute +
					(Math.PI / 21600) * second,
			);
			ctx.lineWidth = 14;
			ctx.beginPath();
			ctx.moveTo(-30, 0);
			ctx.lineTo(70, 0);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.rotate((Math.PI / 30) * minute + (Math.PI / 1800) * second);
			ctx.lineWidth = 12;
			ctx.beginPath();
			ctx.moveTo(-40, 0);
			ctx.lineTo(100, 0);
			ctx.stroke();
			ctx.restore();

			ctx.save();
			ctx.rotate((second * Math.PI) / 30);
			ctx.strokeStyle = 'red';
			ctx.lineWidth = 8;
			ctx.beginPath();
			ctx.moveTo(-50, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
			ctx.fill();
			ctx.beginPath();
			ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
			ctx.stroke();
			ctx.fillStyle = 'rgba(0, 0, 0, 0)';
			ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
			ctx.fill();
			ctx.restore();

			ctx.beginPath();
			ctx.lineWidth = 25;
			ctx.strokeStyle = 'darkblue';
			ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
			ctx.stroke();
			ctx.restore();

			window.requestAnimationFrame(watch);
		}

		window.requestAnimationFrame(watch);
	}
}
