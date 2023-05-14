import './styles.css';

import { ContextMenu } from './menu';
import { BackgroundModule } from './modules/background.module';
import { PianoModule } from './modules/piano.module';
import { FreeShape } from './modules/free-shape.module';
import { RainModule } from './modules/rain.module';
import { JokeModule } from './modules/getJoke.module';
import { WeatherModule } from './modules/showWeather.module';
import { TimeNowModule as TimeNowModule } from './modules/timeNow.module';
import { Game } from './modules/game.module';

const menu = new ContextMenu('.menu');
const showPiano = new PianoModule('Сыграть на пианино');
const changeBackground = new BackgroundModule('Поменять цвет');
const freeShape = new FreeShape('Произвольная фигура');
const rainDrops = new RainModule('Вызвать дождь на 5 секунд');
const getJoke = new JokeModule('Рандомный DadJoke');
const showWeather = new WeatherModule('Показать погоду');
const timeNow = new TimeNowModule('Который час?');
const game = new Game('Игра');

menu.add(showPiano);
menu.add(changeBackground);
menu.add(freeShape);
menu.add(rainDrops);
menu.add(getJoke);
menu.add(showWeather);
menu.add(timeNow);
menu.add(game);
