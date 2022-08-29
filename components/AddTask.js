import { useEffect, useState } from 'react';
import React from 'react';
import { Alert, StyleSheet, Button, View, TextInput, SafeAreaView } from 'react-native';
import {setTask} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-datepicker';


export default function AddTask ({navigation}) {
    const {task, taskID} = useSelector (state => state.taskReducer);
    const dispatch = useDispatch ();

    const [title, setTitle] = useState ('')
    const [comment, setComment] = useState ('')
    const [player, setPlayer] = useState ('')
    const [date, setDate] = useState('');

    const getTask = () => {
        const Task = task.find(task => task.ID === taskID)
        if (Task) {
            setTitle(Task.Title);
            setComment(Task.Comment);
            setPlayer(Task.Player);
            setDate(Task.Date);
        }
    }

    useEffect (() => {
        getTask();
    }, [])

    const setTasks = () => {
        if (title.length == 0) {
           Alert.alert('Введите задачу') 
        } else {
            try {
                var Task = {
                    ID: taskID,
                    Title: title, 
                    Comment: comment,
                    Player: player,
                    Date: date,
                }
                const index = task.findIndex(task => task.ID === taskID);
                let newTask = [];
                if (index > -1) {
                    newTask = [...task];
                    newTask[index] = Task;
                } else {
                    newTask = [...task, Task];
                }
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
            <TextInput 
            value={player}
            style={styles.input}
            placeholder= "Исполнитель"
            onChangeText = {(value) => setPlayer(value)}
            multiline
             />
             <SafeAreaView style={styles.container}>
                    <View style={styles.containerDate}>
                    <DatePicker
                    style={styles.datePickerStyle}
                    date={date} 
                    mode="date"
                    placeholder="Срок исполнения"
                    format="DD-MM-YYYY"
                    minDate="01-01-2022"
                    maxDate="01-01-2030"
                    confirmBtnText="Выбрать"
                    cancelBtnText="Выйти"
                    customStyles={{
                        dateIcon: {
                        display: 'none',
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0,
                        },
                        dateInput: {
                        //marginLeft: 5,
                        },
                    }}
                    onDateChange={(date) => {
                        setDate(date);
                    }}
                    />
                </View>
                </SafeAreaView>
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
    },

    containerDate: {
      },
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: '100%',
        marginTop: 20,
      },
    });

