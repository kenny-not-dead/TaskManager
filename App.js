
//import { useState } from 'react';
//import { StyleSheet, FlatList, View, Text, ScrollView } from 'react-native';
import React from 'react';
import AddTask from './components/AddTask';
import TaskScreen from './components/TaskScreen';
import { Navbar } from './components/Navbar';
// import { Done } from './components/Done';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Provider } from 'react-redux';
import  { store } from './redux/store';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <Navbar title = {'Task Manager'}/>
          <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='TaskScreen'
                    component={TaskScreen}
                    options={{
                      header: () => null
                    }}
                />   
                  <RootStack.Screen
                    name='AddTask'
                    component={AddTask}   
                />   
            </RootStack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}
