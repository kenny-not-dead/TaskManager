import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Task(props) {
  return (
    <View style={styles.container}>
       <TouchableOpacity>
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


/*

    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {todo.id}}
            onLongPress = {onRemove.bind(null, todo.id)}>
            <View style={styles.container}>
                <Text> {todo.title}</Text>
                <Text  style={styles.active}> {todo.active}</Text>
            </View>
        </TouchableOpacity>
    );
}


*/