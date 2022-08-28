import { useState } from 'react';
import React from 'react';
import { Alert, StyleSheet, Button, View, TextInput } from 'react-native';
import {setTask} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function AddTask (navigation) {
    const {task, taskID} = useSelector (state => state.taskReducer);
    const dispatch = useDispatch ();

    const [title, setTitle] = useState ('')
    const [comment, setComment] = useState ('')

    const setTasks = () => {
        if (title.length == 0) {
           Alert.alert('Введите задачу') 
        } else {
            try {
                var Task = {
                    ID: taskID,
                    Title: title, 
                    Comment: comment
                }
                let newTask = [...task, Task];
                AsyncStorage.setItem('Task', JSON.stringify(newTask))
                    .then(() => {
                        dispatch(setTask(newTask));
                        Alert.alert('Задача добавлена!');
                        navigation.goBack(null);
                    }) 
                    .catch(error => console.log(error))
            } catch (error) {
                console.log (error);
            }
        }
    }

    return(
        <View style={styles.container}>
            <TextInput 
            value={title}
            style={styles.input}
            placeholder= "Задача"
            onChangeText = {(value) => setTitle(value)}
            
             />
            <TextInput 
            value={comment}
            style={styles.input}
            placeholder= "Комментарий"
            onChangeText = {(value) => setComment(value)}
            multiline
             />
            <Button style={styles.button} title ='Добавить' onPress={setTasks}/>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        padding: 20,
    },
    input: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
        textAlign: 'left'
      },
    button: {
        textColor: 'red'
    }
});

