/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() 
  {
    StatusBar.setBarStyle('light-content',true)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.title}>GE
        <Text style={styles.bot}>Bot
        </Text>
        </Text>
        </View>
        <View style={styles.body}>
        <TextInput
          style={{height: 30,width:300}}
          placeholder="Say 'hello' to start..."
          onChangeText={(text) => this.setState({text})}
        />
        </View>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF7FF',
  },
  header: {
    backgroundColor:'#0FAAFF',
    flex: 2,
    justifyContent:'flex-end',
  },
  title: {
    textAlign:'center',
    fontSize: 46,
    color:'white',
    fontFamily: 'Trebuchet MS',
  },
  bot: {
    fontSize: 20,
    fontFamily: 'Trebuchet MS',

  },
  body:{
    justifyContent:'flex-end',
    flex:16,
  }
});
