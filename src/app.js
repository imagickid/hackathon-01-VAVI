import './styles.css';

import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { ShowMessageModule } from './modules/showMessage.module';
import { RainModule } from './modules/rain.module';
import { JokeModule } from './modules/getJoke.module';

const menu = new ContextMenu('.menu');
const countlicks = new ClicksModule('Считать клики (за 3 секунды)');
const createShape = new ShapeModule('Создать фигуру');
const changeBackground = new BackgroundModule('Поменять цвет');
const showMessage = new ShowMessageModule('Вызвать сообщение');
const rainDrops = new RainModule('Вызвать дождь на 5 секунд');
const getJoke = new JokeModule('Рандомный DadJoke');

menu.add(countlicks);
menu.add(createShape);
menu.add(changeBackground);
menu.add(showMessage);
menu.add(rainDrops);
menu.add(getJoke);
