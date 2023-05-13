import { Module } from '../core/module';

export class ShowMessageModule extends Module {
	constructor(text) {
		super('module4', text);
	}

	trigger() {
		console.log('Реализации: <Вызвать сообщение> ещё нет');
	}
}
