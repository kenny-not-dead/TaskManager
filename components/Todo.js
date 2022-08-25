import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export const Todo = ({todo, onRemove}) => {
    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => console.log('Pressed', todo.id)}
            onLongPress = {onRemove.bind(null, todo.id)}>
            <View style={styles.container}>
                <Text> {todo.title}</Text>
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
    marginBottom: 10
}
});

