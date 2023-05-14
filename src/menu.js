import { Menu } from './core/menu';

export class ContextMenu extends Menu {
	constructor(selector) {
		super(selector);

		document.addEventListener('contextmenu', (event) => {
			event.preventDefault();
			this.open(event.clientX, event.clientY);
		});
	}
	open(x, y) {
		this.el.style.left = `${this.calculateXPosition(x)}px`;
		this.el.style.top = `${this.calculateYPosition(y)}px`;
		this.el.classList.add('open');
	}

	close() {
		this.el.classList.remove('open');
	}

	add(module) {
		this.el.insertAdjacentHTML('beforeend', module.toHTML());
		const menuItem = document.querySelector(`[data-type="${module.type}"]`);

		menuItem.addEventListener('click', () => {
			module.trigger();
			this.close();
		});
	}

	calculateXPosition(x) {
		const menuWidth = this.el.offsetWidth;
		const windowWidth = window.innerWidth;
		const maxX = windowWidth - menuWidth;
		return Math.min(x, maxX);
	}

	calculateYPosition(y) {
		const menuHeight = this.el.offsetHeight;
		const windowHeight = window.innerHeight;
		const maxY = windowHeight - menuHeight;
		return Math.min(y, maxY);
	}
}
