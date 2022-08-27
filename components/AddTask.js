import { useState } from 'react';
import React from 'react';
import { Alert, StyleSheet, Button, View, TextInput } from 'react-native';


export default function AddTask () {
    const [title, setTitle] = useState ('')
    const [comment, setComment] = useState ('')

    const setTask = () => {
        if (title.length == 0) {
           Alert.alert('Введите задачу') 
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
            <Button style={styles.button} title ='Добавить' onPress={setTask}/>
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

