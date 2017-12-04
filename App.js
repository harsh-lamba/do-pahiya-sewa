import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome users!</Text>
        <Greeting name='Harsh'></Greeting>
        <Greeting name='Vikash'></Greeting>
        <Greeting name='Karan'></Greeting>
      </View>
    );
  }
}

class Greeting extends React.Component {
  render () {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
