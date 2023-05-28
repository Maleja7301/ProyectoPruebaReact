import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const TextInputCustom = props => {
  return (
    <View style={styles.viewInput}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder}
        key={props.name}
        style={[props.style, styles.input]}
        {...props}
      />
    </View>
  );
};
export default TextInputCustom;

const styles = StyleSheet.create({
  viewInput: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    padding: 0,
    width: '100%',
    marginVertical: 5,
  },
  label: {
    fontSize: 18,
    paddingBottom: 5,
    color: '#000000',
    paddingLeft: 10,
  },
  input: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#575757',
    borderRadius: 10,
    paddingLeft: 12
  },
  textInput: {
    color: '#000',
    padding: 0,
    backgroundColor: '#fff',
    width: '90%',
    fontSize: 12,
  },
  dropdownText: {
    color: '#000000',
    fontSize: 14,
  },
  innputText: {
    color: '#000000',
    fontSize: 12,
  },
  dropdownTextStyles: {
    width: 300,
  }
});
