import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'news' };
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'news'}
          title="News"
          onPress={() => this.setState({ selectedTab: 'news' })}>
          <View style={styles.container}>
            <Text>News</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'results'}
          title="Results"
          onPress={() => this.setState({ selectedTab: 'results' })}>
          <View style={styles.container}>
          <Text>Results</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'wiki'}
          title="Wiki"
          onPress={() => this.setState({ selectedTab: 'wiki' })}>
          <View style={styles.container}>
          <Text>Wiki</Text>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'about'}
          title="About"
          onPress={() => this.setState({ selectedTab: 'about' })}>
          <View style={styles.container}>
            <Text>Copyright &copy; David Zhang, 2018.</Text>
            <Text>nbrugby.com</Text>
          </View>
        </TabNavigator.Item>
      </TabNavigator>
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
