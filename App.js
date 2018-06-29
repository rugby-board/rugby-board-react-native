import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';
import News from './pages/News';
import Results from './pages/Results';
import About from './pages/About';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: 'news' };
  }

  render() {
    return (
      <TabNavigator tabBarStyle={styles.tabbar}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'news'}
          title="News"
          renderIcon={() => <Icon name="newspaper-o" size={30} />}
          renderSelectedIcon={() => <Icon name="newspaper-o" size={30} />}
          onPress={() => this.setState({ selectedTab: 'news' })}>
          <View style={styles.container}>
            <News />
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'results'}
          title="Results"
          renderIcon={() => <Icon name="table" size={30} />}
          renderSelectedIcon={() => <Icon name="table" size={30} />}
          onPress={() => this.setState({ selectedTab: 'results' })}>
          <View style={styles.container}>
            <Results />
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'about'}
          title="About"
          renderIcon={() => <Icon name="home" size={30} />}
          renderSelectedIcon={() => <Icon name="home" size={30} />}
          onPress={() => this.setState({ selectedTab: 'about' })}>
          <View style={styles.container}>
            <About />
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
    marginTop: 48,
    marginBottom: 24,
  },
  tabbar: {
    paddingBottom: 16,
    height: 72,
  },
});
