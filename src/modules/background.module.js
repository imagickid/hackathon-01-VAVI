import { Module } from '../core/module';

export class BackgroundModule extends Module {

      constructor(text) {
        super('module3', text);
      }
    
      trigger() {
        console.log('Реализации: <Поменять цвет> ещё нет');
      }
}
