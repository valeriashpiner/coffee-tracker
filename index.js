import { AppRegistry } from 'react-native';
import App from './app';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
AppRegistry.registerComponent('CoffeeTracker', () => App);
