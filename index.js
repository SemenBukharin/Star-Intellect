/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import Load from './src/pages/LoadScene' //Импортируем переменную по дефолту из указанного файла
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Load); //Назначаем переменную точкой входа
