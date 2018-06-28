import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

export default class NewsItem extends React.Component {
  render() {
    const {title, rendered_content, channel_text, event_text, created_at} = this.props.data;
    return (
      <View style={styles.item}>
        <View style={styles.head}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
        <ScrollView style={styles.content}>
          <HTML html={rendered_content} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
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
