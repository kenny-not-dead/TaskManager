import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { setTask, setTaskID } from '../redux/actions';
import React from 'react'
import { useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

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

const checkTask = (id, newValue) => {
    const index = props.task.findIndex (task => task.ID === id);
    if (index > -1) {
      let newTask = [...props.task];
      newTask[index].Done = newValue;
      AsyncStorage.setItem('Task', JSON.stringify(newTask))
      .then(()=> {
        dispatch(setTask(newTask))
        Alert.alert('Успешно!')
      })
      .catch(err => console.log(err))
    }
  }

  return (
    <View style={[ {
        borderColor:
        props.item.Quick === true ? 'red': '#c0ddfa'
    },
    styles.container]}>
       <TouchableOpacity
       onPress={()=> {
        dispatch(setTaskID(props.item.ID));
        navigation.navigate('AddTask');
       }}>
            <View style={styles.titledate}>
                <Checkbox value={props.item.Done} 
                            onValueChange={(newValue)=> {checkTask(props.item.ID, newValue)}}/>
                <Text style={styles.title}>
                    {props.item.Title}
                </Text>
                <Text style={[
                   {
                    color:
                    props.item.Quick === true ? 'red': 'black'
                }, 
                    styles.date]}>
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
             <FontAwesome5
                      name={'trash'}
                      size={18}
                      color={'#8fa3e3'}/> 
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 5,
        flexDirection: 'row',
        borderWidth: 2,
        borderRadius: 10,
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
        width: '73%',
        fontWeight: "bold",
        paddingLeft: 5,
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
    },

});

