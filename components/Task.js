import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { setTask, setTaskID } from '../redux/actions';
import React from 'react'
import { useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Task(props) {
    const dispatch = useDispatch ();
    const navigation = useNavigation(); 


const onRemove = (id) => {
    const filteredTask = props.task.filter(task => task.ID !== id);
    AsyncStorage.setItem('Task', JSON.stringify(filteredTask))   
    .then(() => {
        dispatch(setTask(filteredTask));
    })
    .catch(err=>console.log(err))
}


  return (
    <View style={styles.container}>
       <TouchableOpacity
       onPress={()=> {
        dispatch(setTaskID(props.item.ID));
        navigation.navigate('AddTask');
       }}>
            <Text style={styles.title}>
                {props.item.Title}
            </Text>
            <Text style={styles.text}>
                {props.item.Comment}
            </Text>
            <Text style={styles.text}>
                {props.item.Player}
            </Text>
            <Text style={styles.text}>
                {props.item.Date}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => {onRemove(props.item.ID) }}>
            <Text>Delete</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        marginBottom: 10,
        alignItems:  'center',
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        },

    title: {
        fontSize: 20,
        },

    text: {
        marginTop: 15,
        fontSize: 14,
        color: '#838383'
        }
});

