import React from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Rugby News Board</Text>
        <Text style={styles.copyright}>Copyright &copy; David Zhang, 2018.</Text>
        <Text style={styles.library}>Libraries We Use</Text>
        <Text>React Native</Text>
        <Text>Momentjs</Text>
        <Text>vector-icons</Text>
        <Text>react-native-htmlview</Text>
        <Text>react-native-tab-navigator</Text>
        <Text>timeoutify-promise</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 8,
    width: '100%',
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
  },
  copyright: {
    fontSize: 16,
    marginBottom: 16,
  },
  library: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
});
