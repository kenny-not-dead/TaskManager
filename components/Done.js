
//import { StatusBar } from 'expo-status-bar';
//import { Navbar } from './Navbar';
//import { Task } from './Todo';
import React from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import {useSelector } from 'react-redux';
import Task from './Task';

export default function Done ({}) {
    
    const {task} = useSelector (state => state.taskReducer);

      return(
            <View>
                <FlatList style={styles.containerTask}
                        data={task.filter(task => task.Done === true)} renderItem ={({item}) => (
                           <Task item={item} task={task}/>
                        )} 
                        keyExtractor={(item, index) => index.toString()}  />
            </View>
      )
    }
    
const styles = StyleSheet.create({
    containerTask: {
        height: '100%',
    },
  });
  
