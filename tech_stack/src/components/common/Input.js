import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ value, label, placeholder, onChangeText, secureTextEntry }) =>
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
    />
  </View>;

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
   fontSize: 18,
   paddingLeft: 20,
   flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export { Input }