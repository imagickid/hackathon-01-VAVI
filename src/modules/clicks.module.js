import { Module } from '../core/module';

export class ClicksModule extends Module {
	constructor(text) {
		super('module1', text);
	}

	trigger() {
		console.log('Реализации: <Считать клики (за 3 секунды)> ещё нет');
	}
}
