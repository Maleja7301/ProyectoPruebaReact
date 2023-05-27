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

const Form = () => {
  const initState = '';
  const [modalShow, setModalShow] = useState(false);
  const [paciente, setPaciente] = useState(initState);
  const [propietario, setPropietario] = useState(initState);
  const [email, setEmail] = useState(initState);
  const [sintomas, setSintomas] = useState(initState);
  const [keyItem, setKeyItem] = useState(initState);
  const [lista, setLista] = useState([]);

  const press = () => {
    if ([paciente, propietario, email, sintomas].includes('')) {
      return Alert.alert('Advertencia', 'Todos los campos son obligatorios');
    }

    let exist = lista.filter(e => {
      return e.key === keyItem;
    });
    if (exist.length === 0) {
      let newObj = {
        key: Date.now(),
        paciente,
        propietario,
        email,
        sintomas
      };
      setLista([...lista, newObj]);
    } else {
      let list = lista.map(e => {
        if (e.key === keyItem) {
          e.paciente = paciente;
          e.propietario = propietario;
          e.email = email;
          e.sintomas = sintomas;
        }
        return e;
      });
      setLista(list);
    }
    limpiarDatos();
    setModalShow(false);
  };

  const limpiarDatos = () => {
    setPropietario(initState);
    setEmail(initState);
    setSintomas(initState);
    setPaciente(initState);
    setKeyItem(initState);
  };

  const editPress = item => {
    setPropietario(item.propietario);
    setEmail(item.email);
    setSintomas(item.sintomas);
    setPaciente(item.propietario);
    setKeyItem(item.key);
    setModalShow(true);
  };

  const deletePress = item => {
    let newList = lista.filter(e => {
      return e.key !== item.key;
    });
    setLista(newList);
  };

  console.log(lista);

  return (
    <SafeAreaView style={styles.container}>
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
              label={'SÃ­ntomas'}
              multiline={true}
              placeholder={'SÃ­ntomas'}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => press()}>
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
      <View>
        {lista.length === 0 && <Text>No hay citas</Text>}
        <FlatList
          data={lista}
          renderItem={({item}) => (
            <View>
              <View>
                <Text style={styles.item}>
                  {'Nombre paciente: ' + item.paciente}
                </Text>
                <Text style={styles.item}>
                  {'Propietaro: ' + item.propietario}
                </Text>
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
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};
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
  contentIem: {
    flexDirection: 'row',
    marginVertical: 10
  },
  item: {
    marginHorizontal: 5,
    fontSize: 15
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

export default Form;
