import * as React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { View } from 'react-native';

import SearchScreen from '../containers/search';
import FavoriteScreen from '../containers/favorite';
import SettingsScreen from '../containers/settings';
import TrackerScreen from '../containers/tracker';
import SpecialOfferScreen from  '../containers/offers';
import { navigationLocals } from '../constants/locals';

const nestedStackNavigatorStyles = {
  headerStyle: {
    backgroundColor: '#c9a175',
  },
  headerTitleStyle: {
    color: '#ffffff',
    alignSelf: 'center',
    textAlign: 'center',
  },
};

export const RootTabs = TabNavigator({
  Tabs: {
    screen: StackNavigator({
      Home: {
        screen: SearchScreen,
        navigationOptions: {
       // headerTitle: <NavigationBar title={navigationLocals.COURSES_CATALOG} tab='courses' />,
          ...nestedStackNavigatorStyles,
        },
      },
    }, { headerMode: 'screen' }),
    navigationOptions: {
      title: navigationLocals.SEARCH,
    //   tabBarIcon: props => (
    //     <TabNavigationIcon
    //       width={23}
    //       height={19}
    //       icon={catalogIcon}
    //       {...props}
    //     />),
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
    //   tabBarIcon: props => (
    //     <TabNavigationIcon
    //       width={29}
    //       height={17}
    //       icon={myCoursesIcon}
    //       {...props}
    //     />),
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
    //   tabBarIcon: props => (
    //     <TabNavigationIcon
    //       width={27}
    //       height={19}
    //       icon={knowledgeBaseIcon}
    //       {...props}
    //     />),
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
    //   tabBarIcon: props => (
    //     <TabNavigationIcon
    //       width={23}
    //       height={19}
    //       icon={calendarIcon}
    //       {...props}
    //     />),
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
    //   tabBarIcon: props => (
    //     <TabNavigationIcon
    //       width={20}
    //       height={20}
    //       icon={profileIcon}
    //       {...props}
    //     />),
    },
  },
}, {
  tabBarPosition: 'bottom',
  initialRouteName: 'Tabs',
  tabBarOptions: {
    activeTintColor: '#c9a175',
    inactiveTintColor: '#8c8c8c',
    style: {
      backgroundColor: '#ffffff',
      height: 57,
      paddingLeft: 10,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowOpacity: 0.2,
      shadowColor: '#000000',
    },
    labelStyle: {
      fontSize: 8,
      margin: 0,
      paddingTop: 6,
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
