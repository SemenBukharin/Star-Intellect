/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import First from './src/pages/FirstScene';

AppRegistry.registerComponent(appName, () => First);
