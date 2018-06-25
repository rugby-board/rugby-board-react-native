import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { getNewsByChannel } from '../utils/data';
import NewsItem from '../components/NewsItem';

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
          renderItem={({item}) => <NewsItem data={item} />}
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
});
