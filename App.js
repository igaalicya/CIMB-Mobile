/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import H1 from './src/components/Text/H1';

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  textInput: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 12,
    width: '80%',
    marginTop: 12,
  },
  bgGray: {
    backgroundColor: 'gray',
  },
});

const StylingDasar = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* View berlaku sama seperti div */}
      {/* flex direction default column */}
      <View
        style={{
          backgroundColor: 'pink',
          flex: 1,
        }}
      />
      <View
        style={{
          backgroundColor: 'lightblue',
          flex: 2,
        }}>
        <View style={{flex: 1, backgroundColor: 'lightblue'}} />
        <View style={{flex: 1, backgroundColor: 'navy'}} />
      </View>
    </SafeAreaView>
  );
};

const App = () => {
  // nama state, function untuk set state handlernya (set handlernya cuma berlaku buat state tersebut)
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = () => {
    // console.log('Tap todo');
    setTodoList([...todoList, inputText]);
  };

  const inputHandler = text => {
    // console.log('Input Handler', text);
    setInputText(text);
  };

  // dipisah jadi function sendiri buat ningkatin performance
  // const renderTodoList = ({item}) => <Text>{item}</Text>;
  const renderTodoList = ({item, index}) => {
    return (
      <View style={{flexDirection: 'row', marginTop: 12}}>
        <Text>{item}</Text>
        <TouchableOpacity
          style={{marginLeft: 8, backgroundColor: 'red'}}
          onPress={() => deleteHandler(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const deleteHandler = index => {
    const newArr = todoList.filter((val, idx) => {
      return idx !== index;
    });
    setTodoList(newArr);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <StylingDasar /> */}
      <SafeAreaView />
      {/* <Text>{inputText}</Text> */}
      <H1 style={{color: 'red'}}>Halo Dunia</H1>
      <TextInput
        onChangeText={inputHandler}
        // style={[styles.textInput, styles.bgGray]}
        style={{...styles.textInput, ...styles.bgGray}}
        placeholder="Your Text Here"
      />
      <TouchableOpacity style={{marginTop: 8}} onPress={addTodoHandler}>
        <Text>ADD TODO</Text>
      </TouchableOpacity>
      {/* tidak di rekomendasikan pake scroll view */}
      {/* <ScrollView>
        {todoList.map((val, idx) => {
          return <Text key={idx.toString()}>{val}</Text>;
        })}
      </ScrollView> */}
      {/* render item = function yang nge return component */}
      <FlatList
        keyExtractor={(item, idx) => idx.toString()}
        data={todoList}
        renderItem={renderTodoList}
      />
    </View>
  );
};

export default App;
