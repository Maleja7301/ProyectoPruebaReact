import {Alert, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import TextInputCustom from './TextInputCustom';
import * as React from 'react';
import {useEffect, useState} from 'react';

export default function ModalView({
  modalShow,
  setModalShow,
  citas,
  setCitas,
  citaEdit,
}) {
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [keyItem, setKeyItem] = useState('');

  useEffect(() => {
    setPaciente(citaEdit.paciente || '');
    setPropietario(citaEdit.propietario || '');
    setEmail(citaEdit.email || '');
    setTelefono(citaEdit.telefono || '');
    setSintomas(citaEdit.sintomas || '');
    setKeyItem(citaEdit.key || '');
  }, [citaEdit, modalShow]);

  const press = () => {
    if ([paciente, propietario, email, sintomas, telefono].includes('')) {
      return Alert.alert('Advertencia', 'Todos los campos son obligatorios');
    }

    if (keyItem === '') {
      let newObj = {
        key: Date.now(),
        paciente,
        propietario,
        telefono,
        email,
        sintomas
      };
      setCitas([...citas, newObj]);
    } else {
      let list = citas.map(e => {
        if (e.key === keyItem) {
          e.paciente = paciente;
          e.propietario = propietario;
          e.telefono = telefono;
          e.email = email;
          e.sintomas = sintomas;
        }
        return e;
      });
      setCitas(list);
    }
    limpiarDatos();
    setModalShow(false);
  };

  const limpiarDatos = () => {
    setPropietario('');
    setEmail('');
    setSintomas('');
    setTelefono('');
    setPaciente('');
    setKeyItem('');
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalShow}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable
            style={styles.btnclose}
            onPress={() => {
              limpiarDatos();
              setModalShow(false);
            }}>
            <Text style={styles.textStyle}>X</Text>
          </Pressable>
          <TextInputCustom
            label={'Nombre paciente'}
            keyboardType={'default'}
            placeholder={'Nombre paciente'}
            value={paciente}
            onChangeText={setPaciente}
          />
          <TextInputCustom
            value={propietario}
            onChangeText={setPropietario}
            label={'Nombre Propietario'}
            placeholder={'Nombre Propietario'}
          />
          <TextInputCustom
            label={'Telefono'}
            value={telefono}
            onChangeText={setTelefono}
            placeholder={'Telefono'}
          />
          <TextInputCustom
            label={'Email'}
            value={email}
            onChangeText={setEmail}
            inputMode={'email'}
            keyboardType={'email-address'}
            placeholder={'Email'}
          />
          <TextInputCustom
            value={sintomas}
            onChangeText={setSintomas}
            label={'Síntomas'}
            multiline={true}
            numberOfLines={2}
            placeholder={'Síntomas'}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => press()}>
            <Text style={styles.textStyle}>
              {keyItem === '' ? 'Guardar' : 'Editar'}
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.51)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  btnclose: {
    borderRadius: 20,
    padding: 10,
    position: 'absolute',
    right: 5,
    top: 2,
    color: '#0a0a0a',
    backgroundColor: 'rgba(122,122,122,0.65)'
  }
});
