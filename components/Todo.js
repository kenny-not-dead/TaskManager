import { StyleSheet, Text, View } from 'react-native';

export const Todo = ({todo}) => {
    return(
        <View style={styles.container}>
            <Text> {todo.title}</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    container: {
    padding: 10,
}
});


//onPress={()} => (todo.id)} onLongPress = {onRemove.bind (null, todo.id)}, передать в todo onRemove