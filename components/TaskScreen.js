
//import { StatusBar } from 'expo-status-bar';
//import { Navbar } from './Navbar';
//import { Task } from './Todo';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { setTask, setTaskID } from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

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
                <FlatList 
                        data={task} renderItem ={({item}) => (
                            <TouchableOpacity>
                                <Text>
                                    {item.Title}
                                </Text>
                                <Text>
                                    {item.Comment}
                                </Text>
                            </TouchableOpacity>
                        )} />
                <Pressable  style={styles.bodyAdd}
                   onPress={() => {
                    dispatch(setTaskID(task.length + 1 ))
                    navigation.navigate('AddTask');
                   }}>
                  <Text style={styles.add}> + </Text>
                </Pressable>
            </View>
      )
    }
    

    
const styles = StyleSheet.create({
  
    add: {
      fontSize: 35,
      color: 'white',
      textAlign: 'center',
    },
  
    bodyAdd:{
      width: 50,
      height: 50,
      borderRadius: 30,
      backgroundColor: 'grey',
      elevation: 5,
      margin: 70
    }
  });
  


        //    ( <Todo todo={item} onRemove={removeTodo}/>)}/> Сделать компоненту для таски в отдельное окно, вызывать по типу как тут