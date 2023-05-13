import './styles.css';

import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { ShapeModule } from './modules/shape.module';
import { ShowMessageModule } from './modules/showMessage.module';

const menu = new ContextMenu('.menu');
const countlicks = new ClicksModule('Считать клики (за 3 секунды)');
const createShape = new ShapeModule('Создать фигуру');
const changeBackground = new BackgroundModule('Поменять цвет');
const showMessage = new ShowMessageModule('Вызвать сообщение');

menu.add(countlicks);
menu.add(createShape);
menu.add(changeBackground);
menu.add(showMessage);
