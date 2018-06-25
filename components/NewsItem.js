import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Markdown from 'react-native-simple-markdown'

export default class NewsItem extends React.Component {
  render() {
    const {id, title, content, channel_text, event_text, created_at} = this.props.data;
    return (
      <View style={styles.item}>
        <View style={styles.head}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
        <View style={styles.content}>
          <Markdown styles={markdownStyles}>{content}</Markdown>
        </View>
        <View style={styles.footer}>
          <Text>{channel_text} | {event_text}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
  },
  head: {
    padding: 2,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
  },
  content: {
    padding: 2,
    marginBottom: 8,
  },
  footer: {
    padding: 2,
  },
});

const markdownStyles = {
  table: {
    textAlign: 'center',
  },
  tableHeader: {
    color: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#aaa',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tableRowCell: {
    // width: '33.3%',
    // textAlign: 'center',
    padding: 4,
  },
  tableRowLast: {
    textAlign: 'right',
    borderColor: 'transparent',
  },
};
