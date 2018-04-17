import * as React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import {
  favoritePlaces,
  tracker,
  specialOffers,
  settings,
  search
} from '../assets';
import SearchScreen from '../containers/search';
import FavoriteScreen from '../containers/favorite';
import SettingsScreen from '../containers/settings';
import TrackerScreen from '../containers/tracker';
import SpecialOfferScreen from  '../containers/offers';
import { TabNavigationIcon } from './navigation-icon';
import { navigationLocals } from '../constants/locals';

const nestedStackNavigatorStyles = {
  headerStyle: {
    backgroundColor: '#c9a175',
  },
  headerTitleStyle: {
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
  }
};

const nestedStackNavigatorStylesTransparent = { 
  headerStyle:{ 
    position: 'absolute', 
    backgroundColor: 'transparent', 
    zIndex: -10, 
    top: 0, 
    left: 0, 
    right: 0,
    borderWidth: 0 } };

export const RootTabs = TabNavigator({
  Tabs: {
    screen: StackNavigator({
      Home: {
        screen: SearchScreen,
        navigationOptions: {
       // headerTitle: <NavigationBar title={navigationLocals.COURSES_CATALOG} tab='courses' />,
          ...nestedStackNavigatorStylesTransparent,
        },
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.SEARCH,
      tabBarIcon: props => (
        <TabNavigationIcon
          width={21}
          height={21}
          icon={search}
          {...props}
        />),
    },
  },
  FavoriteScreen: {
    screen: StackNavigator({
      Home: {
        screen: FavoriteScreen,
        navigationOptions: {
          title: navigationLocals.LIKED,
          ...nestedStackNavigatorStyles,
        },
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.LIKED,
      tabBarIcon: props => (
        <TabNavigationIcon
          width={24}
          height={21}
          icon={favoritePlaces}
          {...props}
        />),
    },
  },
  TrackerScreen: {
    screen: StackNavigator({
      Home: {
        screen: TrackerScreen,
        navigationOptions: {
         // headerTitle: <NavigationBar title={navigationLocals.KNOWLEDGE_DATABASE} tab='materials' />,
          ...nestedStackNavigatorStyles,
        },
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.TRACKER,
      tabBarIcon: props => (
        <TabNavigationIcon
          width={17}
          height={24}
          icon={tracker}
          {...props}
        />),
    },
  },
  SpecialOffer: {
    screen: StackNavigator({
      Home: {
        screen: SpecialOfferScreen,
        navigationOptions: {
      //    headerLeft: <CalendarToggle />,
          ...nestedStackNavigatorStyles,
        },
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.SPECIAL,
      tabBarIcon: props => (
        <TabNavigationIcon
          width={22}
          height={22}
          icon={specialOffers}
          {...props}
        />),
    },
  },
  Settings: {
    screen: StackNavigator({
      Home: {
        screen: SettingsScreen,
        navigationOptions: ({ navigation }) => ({
          title: navigationLocals.SETTINGS,
          ...nestedStackNavigatorStyles,
        //   headerRight: (
        //     <LogoutButton
        //         style={{ width: 15, height: 15 }}
        //         actionOnPress={onLogout}
        //         nav={navigation}
        //     />
        //   ),
        //  headerLeft: <View />
        }),
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.PROFILE,
      tabBarIcon: props => (
        <TabNavigationIcon
          width={22}
          height={22}
          icon={settings}
          {...props}
        />),
    },
  },
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Tabs',
  tabBarOptions: {
    activeTintColor: '#c9a175',
    inactiveTintColor: '#d1d1d1',
    style: {
      backgroundColor: '#ffffff',
      borderTopColor: '#ffffff',
      height: 57,
      paddingLeft: 10,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.1,
      shadowColor: '#000000',
    },
    labelStyle: {
      fontSize: 10,
      marginBottom: 5,
      paddingTop: 0,
    },
    showIcon: true,
    allowFontScaling: false,
    indicatorStyle: {
      backgroundColor: 'transparent',
    },
    tabStyle: {
      padding: 0,
    },
    iconStyle: {
      width: 32,
      height: 22,
    },
  },
});
