import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Favourites from './screens/Favourites';
import AddPlace from './screens/AddPlace';
import Profile from './screens/Profile';
import ExploreNearyBy from './screens/ExploreNearyBy';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  'MyFavourites': {
    screen: Favourites,
    navigationOptions: {
      tabBarLabel: 'MyFavourites',
      tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
    },
  },
  'Explore': {
    screen: ExploreNearyBy,
    navigationOptions: {
      tabBarLabel: 'Explore',
      tabBarIcon: ({ tintColor }) => <Icon name="map-marker-radius" type="material-community" size={28} color={tintColor} />
    },
  },
  'AddPlace': {
    screen: AddPlace,
    navigationOptions: {
      tabBarLabel: 'AddPlace',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="account-settings" type="material-community" size={28} color={tintColor} />
    },
  },
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};