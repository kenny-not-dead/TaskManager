import { useEffect, useState } from 'react';
import React from 'react';
import { Alert, StyleSheet, Button, View, TextInput, SafeAreaView, Text } from 'react-native';
import {setTask} from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-datepicker';
import Checkbox from 'expo-checkbox';


export default function AddTask ({navigation}) {
    const {task, taskID} = useSelector (state => state.taskReducer);
    const dispatch = useDispatch ();

    const [title, setTitle] = useState ('')
    const [comment, setComment] = useState ('')
    const [player, setPlayer] = useState ('')
    const [date, setDate] = useState('')
    const [done, setDone] = useState(false);
    const [quick, setQuick] = useState(false);

    useEffect(() => {
        getTask();
    }, [])

    const getTask = () => {
        const Task = task.find(task => task.ID===taskID)
        if (Task) {
            setTitle(Task.Title);
            setComment(Task.Comment);
            setPlayer(Task.Player);
            setDate(Task.Date);
            setDone(Task.Done);
            setQuick(Task.Quick);
        }
    }

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
                    Done: done,
                    Quick: quick,
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
             />
                <View style ={styles.containerDateQuick} >
                        <SafeAreaView style ={styles.width}>
                                <View style ={styles.width1}>
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
                      <View style={styles.quick}>
                            <Checkbox color={'red'} value={quick} onValueChange= {(newValue) => setQuick(newValue)}/>
                            <Text style={styles.text}> Срочно</Text>
                     </View>
                </View>
        <View style={styles.done}>
             <Checkbox color={'green'} value={done} onValueChange= {(newValue) => setDone(newValue)}/>
             <Text style={styles.text}> Выполнено</Text>
        </View>
            <Button  style={styles.button} title ='Добавить' onPress={setTasks}/>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
       justifyContent: 'space-between',
        padding: 10,
    },

    width:{
        width: '50%',
    },

    containerDateQuick: {
       flexDirection: 'row',
    },

    input: {
        width: '100%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 15,
        textAlign: 'left',
        marginBottom: 10, 
      },

      quick:{
        flexDirection: 'row',
        marginLeft: '15%',
        alignItems: 'center',
        width: 60
      },
      
      title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
      },
      datePickerStyle: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: 'black',
        backgroundColor: 'white',
      },
      done: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40, 
        marginBottom: 30, 
        width: '100%'
      }, 
      text:{
        fontSize: 16,
      }
    });

