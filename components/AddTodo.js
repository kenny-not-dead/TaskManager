import { useState } from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';


export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState (' ')

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
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder= "Введите дело"
            />
            <Button style={styles.button} title ='Добавить' onPress={pressHand}/>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
        
    },
    input: {
        height: 40,
        width: '65%',
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
      },
    button: {
        textColor: 'red'
    }
});

