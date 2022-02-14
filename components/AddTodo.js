import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo() {
  const [text, setText] = useState('');

  const button = (
    <View style={styles.buttonStyle}>
      <Image source={require('../assets/icons/add_white/add_white.png')} />
    </View>
  );

  const onPress = () => {
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={'할 일을 입력하세요.'}
        style={styles.input}
        onSubmitEditing={onPress}
        returnKeyType="done"
      />
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.androidButton}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}
    </View>
  );
}

export default AddTodo;

const styles = StyleSheet.create({
  block: {
    height: 64,
    paddingHorizontal: 16,
    borderColor: '#bdbdbd',
    borderWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    fontSize: 16,
    paddingVertical: 8,
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#26a69a',
    borderRadius: 24,
  },
  androidButton: {
    borderRadius: 24,
    overflow: 'hidden',
  },
});
