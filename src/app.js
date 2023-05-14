import './styles.css';

import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { BackgroundModule } from './modules/background.module';
import { PianoModule } from './modules/piano.module';
import { ShowMessageModule } from './modules/showMessage.module';
import { FreeShape } from './modules/free-shape.module';
import { RainModule } from './modules/rain.module';
import { JokeModule } from './modules/getJoke.module';
import { WeatherModule } from './modules/showWeather.module';
import { TimeNowModule as TimeNowModule } from './modules/timeNow.module';


const menu = new ContextMenu('.menu');
const countlicks = new ClicksModule('Считать клики (за 3 секунды)');
const showPiano = new PianoModule('Сыграть на пианино');
const changeBackground = new BackgroundModule('Поменять цвет');
const showMessage = new ShowMessageModule('Вызвать сообщение');
const freeShape = new FreeShape('Произвольная фигура');
const rainDrops = new RainModule('Вызвать дождь на 5 секунд');
const getJoke = new JokeModule('Рандомный DadJoke');
const showWeather = new WeatherModule('Показать погоду');
const timeNow = new TimeNowModule('Который час?');


menu.add(countlicks);
menu.add(showPiano);
menu.add(changeBackground);
menu.add(showMessage);
menu.add(freeShape);
menu.add(rainDrops);
menu.add(getJoke);
menu.add(showWeather);
menu.add(timeNow);

