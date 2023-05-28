/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ModalView from './src/Components/ModalView';
import Paciente from './src/Components/Paciente';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [modalShow, setModalShow] = useState(false);
  const [citas, setCitas] = useState([]);
  const [citaEdit, setCitaEdit] = useState({});

  console.log(citas)
  const editPress = item => {
    setCitaEdit(item);
    setModalShow(true);
  };

  const deletePress = item => {
    setCitas(
      citas.filter(e => {
        return e.key !== item.key;
      })
    );
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{marginHorizontal: 10}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.text}>Administracion Web de Citas</Text>
      <Text style={styles.subtext}>Veterinaria Native</Text>
      <ModalView {...{citas, setCitas, setModalShow, modalShow, citaEdit}} />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalShow(true)}>
        <Text style={styles.textStyle}>Registrar cita</Text>
      </Pressable>
      <View>
        {citas.length === 0 && <Text>No hay citas</Text>}
        <FlatList
          data={citas}
          renderItem={({item}) => (
            <Paciente {...{item, editPress, deletePress}} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontSize: 30
  },
  subtext: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontSize: 30,
    color: 'red'
  },
  container_button: {
    flex: 1,
    display: 'flex',
    alignItems: 'center'
  },
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
  }
});

export default App;
