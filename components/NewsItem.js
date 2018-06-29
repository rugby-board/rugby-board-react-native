import React from 'react';
import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';

export default class NewsItem extends React.Component {
  static trimNewLines(text) {
    if (!text) return;
    return text.replace(/(\r\n|\n|\r)/gm, '');
  }

  render() {
    const {title, rendered_content, channel_text, event_text, created_at} = this.props.data;
    return (
      <View style={styles.item}>
        <View style={styles.head}>
          <Text numberOfLines={1} style={styles.title}>{title}</Text>
        </View>
        <ScrollView>
          <HTMLView
            value={`${NewsItem.trimNewLines(rendered_content)}`}
            stylesheet={contentStyles}
          />
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerLeft}>{channel_text} | {event_text}</Text>
          <Text style={styles.footerRight}>{`${moment(created_at).format('HH:mm YYYY-MM-DD')}`}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 8,
    marginBottom: 18,
  },
  head: {
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  content: {
    marginBottom: 8,
  },
  footer: {
    borderStyle: 'solid',
    borderTopColor: '#aaa',
    borderTopWidth: 1,
    marginTop: 8,
    paddingTop: 8,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  footerLeft: {
  },
  footerRight: {
  },
});

const contentStyles = StyleSheet.create({
  p: {
    fontSize: 16,
  },
});
