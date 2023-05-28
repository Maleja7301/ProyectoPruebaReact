import {Pressable, StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import { Fragment } from "react";

export default function Paciente({item, editPress, deletePress}) {
  return (
    <Fragment>
      <View>
        <Text style={styles.item}>{'Nombre paciente: ' + item.paciente}</Text>
        <Text style={styles.item}>{'Propietaro: ' + item.propietario}</Text>
        <Text style={styles.item}>{'Telefono: ' + item.telefono}</Text>
        <Text style={styles.item}>{'Email: ' + item.email}</Text>
        <Text style={styles.item}>{'Sintomas: ' + item.sintomas}</Text>
      </View>
      <View style={styles.contentIem}>
        <Pressable
          style={[styles.button, styles.buttonDelete]}
          onPress={() => editPress(item)}>
          <Text style={styles.textStyle}>Editar</Text>
        </Pressable>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => deletePress(item)}>
          <Text style={styles.textStyle}>Eliminar</Text>
        </Pressable>
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 15,
    elevation: 2,
    color: '#fff'
  },
  buttonOpen: {
    backgroundColor: '#2196F3'
  },
  buttonClose: {
    backgroundColor: '#2196F3'
  },
  buttonDelete: {
    backgroundColor: '#f32140',
    marginRight: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  contentIem: {
    flexDirection: 'row',
    marginVertical: 10
  },
  item: {
    marginHorizontal: 5,
    fontSize: 15
  }
});
