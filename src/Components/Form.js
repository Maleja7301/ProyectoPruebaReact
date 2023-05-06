import * as React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import TextInputCustom from './TextInputCustom';
import {useState} from 'react';

const Form = () => {
  const [modalShow, setModalShow] = useState(false);
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');

  console.log(propietario);

  return (
    <SafeAreaView>
      <Modal animationType="slide" transparent={true} visible={modalShow}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalShow(false)}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>

            <TextInputCustom
              label={'Nombre paciente'}
              keyboardType={'default'}
              placeholder={'Nombre paciente'}
              onChangeText={setPaciente}
              value={paciente}
            />
            <TextInputCustom
              label={'Nombre Propietario'}
              placeholder={'Nombre Propietario'}
              onChangeText={setPropietario}
              value={propietario}
            />
            <TextInputCustom
              label={'Email'}
              keyboardType={'email-address'}
              placeholder={'Email'}
              onChangeText={setEmail}
              value={email}
            />
            <TextInputCustom
              label={'Telefono'}
              keyboardType={'numeric'}
              placeholder={'Telefono'}
              onChangeText={setTelefono}
              maxLegth={10}
              value={telefono}
            />
            <TextInputCustom
              label={'Si­ntomas'}
              placeholder={'Si­ntomas'}
              multiline={true}
              numberOfLines={3}
              onChangeText={setSintomas}
              value={sintomas}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {}}>
              <Text style={styles.textStyle}>Enviar informacion</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalShow(true)}>
        <Text style={styles.textStyle}>Registrar cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Form;
