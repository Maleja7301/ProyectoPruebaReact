import * as React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';

import TextInputCustom from './TextInputCustom';
import {useState} from 'react';
import Paciente from './Paciente';
import ModalView from './ModalView';

const Form = () => {


  return (
    <SafeAreaView style={styles.container}>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%'
  },
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    color: '#fff'
  },
  buttonOpen: {
    backgroundColor: '#2196F3'
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Form;
