import { AppRegistry } from 'react-native';
import App from './app';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader', 'Class RCTCxxModule']);
AppRegistry.registerComponent('CoffeeTracker', () => App);
