import React from 'react';
import moment from 'moment';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

function DateHead() {
  const {top} = useSafeAreaInsets();
  const today = moment(new Date()).format('YYYY년 MM월 DD일');

  return (
    <>
      <View style={[styles.statusBarPlaceholder, {height: top}]} />
      <StatusBar backgroundColor="#26a69a" barStyle={'light-content'} />
      <View style={styles.block}>
        <Text style={styles.dateText}>{today}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  statusBarPlaceholder: {
    backgroundColor: '#26a69a',
  },
  block: {
    padding: 16,
    backgroundColor: '#26a69a',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
