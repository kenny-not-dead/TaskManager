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
            <View style={styles.titledate}>
                <Text style={styles.title}>
                    {props.item.Title}
                </Text>
                <Text style={styles.date}>
                    {props.item.Date}
                </Text>
           </View>
            <Text style={styles.text}>
                {props.item.Comment}
            </Text>
            <Text style={styles.player}>
                {props.item.Player}
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.delete}
        onPress={() => {onRemove(props.item.ID) }}>
            <Text >Delete</Text>
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
        borderRadius: 10,
        borderColor: '#c0ddfa',
        marginBottom: 7,
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
        width: '80%',
        fontWeight: "bold"
        },

    text: {
        marginTop: 10,
        fontSize: 14,
        color: '#838383'
        },
    titledate: {
        flexDirection: 'row', 
        },
    date: {
        color: 'red',
        right: 0,
        top: 3
    }, 
    delete: {
        position: 'absolute',
        right: 20,
        bottom: 10

    },
    player: {
        color: 'green',
        top: 10
    }

});

