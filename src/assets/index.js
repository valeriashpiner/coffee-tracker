import { PixelRatio, Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');
const typeOfIphone = width + height;

export const getIphoneScreenType = () => {
  switch (true) {
    case (typeOfIphone >= 1042 && typeOfIphone < 1150): // iPhone 6, 7, 8 (1042)
      return 'iPhoneStandart';
    case (typeOfIphone >= 1150 && typeOfIphone < 1187): // iPhone 6+, 7+, 8+ (1150)
      return 'iPhoneX';
    case (typeOfIphone >= 1187): // iPhone X (1187)
      return 'iPhoneX';
    default:
      return 'iPhoneStandart'; // iPhone 5, SE (1776)
  }
};

const IMAGES = {
  iPhoneStandart: {
    currentPlace: require('../../assets/icons/iphone-standart/currentPlace2x.png'),
    specialOffers: require('../../assets/icons/iphone-standart/gift2x.png'),
    favoritePlaces: require('../../assets/icons/iphone-standart/liked2x.png'),
    settings: require('../../assets/icons/iphone-standart/settings2x.png'),
    tracker: require('../../assets/icons/iphone-standart/tracker2x.png'),
    search: require('../../assets/icons/iphone-standart/search2x.png')
  },
  iPhoneX: {
    currentPlace: require('../../assets/icons/iphonex/currentPlace3x.png'),
    specialOffers: require('../../assets/icons/iphonex/gift3x.png'),
    favoritePlaces: require('../../assets/icons/iphonex/liked3x.png'),
    settings: require('../../assets/icons/iphonex/settings3x.png'),
    tracker: require('../../assets/icons/iphonex/tracker3x.png'),
    search: require('../../assets/icons/iphonex/search3x.png')
  },
};

const icons = Platform.OS === 'ios' ? IMAGES[getIphoneScreenType()] : IMAGES[getIphoneScreenType()];

export const currentPlace = icons.currentPlace;
export const specialOffers = icons.specialOffers;
export const settings = icons.settings;
export const tracker = icons.tracker;
export const favoritePlaces = icons.favoritePlaces;
export const search = icons.search;