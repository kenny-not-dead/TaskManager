import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, FlatList, View, Text, ScrollView } from 'react-native';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/Navbar';
import { Todo } from './components/Todo';
// import { Done } from './components/Done';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const Stack = createStackNavigator();




export default function App() {
  const [todos, setTodos] = useState ([])

  const addTodo = title => {
    setTodos(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          title,
          active: 'Active'
        }
      ])
    }
    

    const removeTodo = id => {
      setTodos(prev => prev.filter(todo => todo.id !==id))
    }



    function ToDoList ({navigation}) {

    const onPressHandler = () => {
      navigation.navigate('Add_todo'); 
    }

      return(
            <View style={styles.container}>
                <Navbar title='To do App'/>
                   <View style={styles.containerContent}>
                        <View style={styles.content}>
                          <FlatList keyExtractor= {item =>item.id.toString()} data={todos} renderItem ={({item}) => ( <Todo todo={item} onRemove={removeTodo}/>)}/>
                        </View>
                      <StatusBar style="auto" />
                    </View>
                <Pressable  style={styles.bodyAdd}
                   onPress={onPressHandler}>
                  <Text style={styles.add}> + </Text>
                </Pressable>
            </View>
      )
    }
    

    function AddTodoForm () {
      return(
            <View style={styles.container}>
                <AddTodo onSubmit={addTodo} />
            </View>
      )
    }

  return (
    <NavigationContainer>
      <Stack.Navigator>
           <Stack.Screen
              name='ToDoList'
              component={ToDoList}
              options={{
                header: () => null
              }}
           />   
                      <Stack.Screen
              name='Add_todo'
              component={AddTodoForm}   
           />   
      </Stack.Navigator>
  </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    
  },

  containerContent:{
    backgroundColor: '#ECECEC'
  },

  content: {
  
    margin: 10,
    height: '81%'
  },

  add: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
  },

  bodyAdd:{
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'grey',
    elevation: 5
  }
});
