
//import { StatusBar } from 'expo-status-bar';
//import { Navbar } from './Navbar';
//import { Task } from './Todo';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Alert } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { setTask, setTaskID } from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import Task from './Task';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default function TaskScreen ({navigation}) {
    
    const {task} = useSelector (state => state.taskReducer);
    const dispatch = useDispatch ();


    useEffect ( () => {
        getTask();
    }, [])

    const getTask = () => {
        AsyncStorage.getItem('Task')
            .then (task => {
                const parsedTask = JSON.parse(task);
                if (parsedTask && typeof parsedTask === 'object') {
                    dispatch (setTask(parsedTask));
                }
            })
                .catch(error => console.log(error))
    }

      return(
            <View>
                <FlatList style={styles.containerTask}
                        data={task.filter(task => task.Done === false)} renderItem ={({item}) => (
                           <Task item={item} task={task}/>
                        )} 
                        keyExtractor={(item, index) => index.toString()}  />
                <Pressable  style={styles.bodyAdd}
                   onPress={() => {
                    dispatch(setTaskID(task.length + 1 ))
                    navigation.navigate('AddTask');
                   }}>
                  <View style={styles.add}>
                    <FontAwesome5
                      name={'plus'}
                      size={20}
                      color={'#ffffff'}/> 
                  </View>
                </Pressable>
            </View>
      )
    }
    
const styles = StyleSheet.create({
    containerTask: {
        height: '100%',
    },

    bodyAdd: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    add: {
      position: 'absolute',
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: '#0080ff',
      elevation: 5,
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
        
          }
  });
  
