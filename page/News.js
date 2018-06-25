import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { getNewsByChannel } from '../util/data';

export default class News extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      page: null,
      pageNum: props.page || 1,
    };
  }

  componentWillMount() {
    this.fetchData(this.state.pageNum);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      this.setState({
        pageNum: nextProps.page,
      });
      this.fetchData(nextProps.page);
      window.scrollTo(0, 0);
    }
  }

  fetchData(pageNum) {
    const self = this;

    getNewsByChannel(0, pageNum,
      (json) => {
        self.setState({
          data: json.news,
          page: json.page,
        });
      },
      () => {
        self.setState({
          error: {
            message: '加载数据缓慢，请刷新再试',
          },
        });
      },
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <Text numberOfLines={1} style={styles.item}>{item.title}</Text>}
        />
      </View>
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
  item: {
    padding: 4,
    textAlign: 'left',
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
});
