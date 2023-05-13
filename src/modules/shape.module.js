import { Module } from '../core/module';

export class ShapeModule extends Module {
	constructor(text) {
		super('module2', text);
	}

	trigger() {
		console.log('Реализации: <Создать фигуру> ещё нет');
	}
}
