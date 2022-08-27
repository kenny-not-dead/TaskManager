import { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';


export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState ('')
    const [comment, setComment] = useState ('')

    const pressHand = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue ('')
        } else {
            //
        }
  
    }

    return(
        <View style={styles.container}>
            <TextInput 
            value={value}
            style={styles.input}
            placeholder= "Введите дело"
            onChangeText={setValue}
            
             />
            <TextInput 
            value={comment}
            style={styles.input}
            placeholder= "Комментарий"
            onChangeText = {(value) => setComment(value)}
            multiline
             />
            <Button style={styles.button} title ='Добавить' onPress={pressHand}/>
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

