import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export const Task = ({todo, onRemove, onClickHandler}) => {

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


const styles = StyleSheet.create({
    container: {
    padding: 30,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    alignItems:  'center',
    backgroundColor: 'white',
},
    active:{
    color:'black',
    padding: 5,
    backgroundColor: '#48f542',
    position: 'absolute',
    marginHorizontal: 0,
    top: 0,
    right: 0,

    }
});

