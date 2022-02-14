import React from 'react';
import {StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.select({ios: 'padding'})}
          style={styles.avoid}>
          <DateHead />
          <Empty />
          <AddTodo />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
