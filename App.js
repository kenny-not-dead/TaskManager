import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/Navbar';
import { Todo } from './components/Todo';

export default function App() {
  const [todos, setTodos] = useState ([])

  const addTodo = title => {
    setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          title
        }
      ])
    }
  

  return (
    <View style={styles.container}>
      <Navbar title='To do App'/>
      <View>
        <AddTodo onSubmit={addTodo} />
        <FlatList keyExtractor= {item =>item.id.toString()} data={todos} renderItem ={({item}) => ( <Todo todo={item}/>)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
  },
});
