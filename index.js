/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */

// Import llibraries
import React from 'react';
import {View, AppRegistry} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import {name as appName} from './app.json';

// Create Components
const App = () => (
  <View style={{flex: 1}}>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

//Render
AppRegistry.registerComponent(appName, () => App);
