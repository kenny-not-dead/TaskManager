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

    const removeTodo = id => {
      setTodos(prev => prev.filter(todo => todo.id !==id))
    }


  return (
    <View style={styles.container}>
      <Navbar title='To do App'/>
      <View style={styles.content}>
        <AddTodo onSubmit={addTodo} />
        <FlatList keyExtractor= {item =>item.id.toString()} data={todos} renderItem ={({item}) => ( <Todo todo={item} onRemove={removeTodo}/>)}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
  },

  content: {
    margin: 10
  }
});
