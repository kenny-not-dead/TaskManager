
import { StatusBar } from 'react-native';
import React from 'react';
import AddTask from './components/AddTask';
import TaskScreen from './components/TaskScreen';
import { Navbar } from './components/Navbar';
import Done from './components/Done';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import  { store } from './redux/store';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={
        ({route}) => ({
          
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Задачи'){
              iconName='clipboard-list';
              size= focused ? 25: 20;
            } else if (route.name === 'Архив') {
                iconName='clipboard-check';
                size= focused ? 25: 20;
            }
            return (
              <FontAwesome5
              name={iconName}
              size={size}
              color={color}/>
            );
          }
        })
      } tabBarOptions={{
        activeTintColor: '#0080ff',
        inactiveTintColor: '#777777',
        labelStyle: { fontSize:15, fontWeight: 'bold'}

      }}
      >
        <Tab.Screen name={'Задачи'} component={TaskScreen} options={{
                      header: () => null
                    }}/>
        <Tab.Screen name={'Архив'} component={Done} options={{
                      header: () => null
                    }}/>
      </Tab.Navigator>
)}



export default function App() {
  return (
    <Provider store = {store}>
      <StatusBar style='light-content' />
      <Navbar title = {'Task Manager'}/>
          <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name='TaskScreen'
                    component={HomeTabs}
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

/*

*/