/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Form from './src/Components/Form';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <Text style={styles.text}>Administracion Web de Citas</Text>
        <Text style={styles.subtext}>Veterinaria Native</Text>
        <Form />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 32,
    marginBottom: 32,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontSize: 30,
  },
  subtext: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 24,
    textAlign: 'center',
    fontSize: 30,
    color: 'red',
  },
  container_button:{
    flex:1,
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D133FF',
    padding: 10,
    borderRadius: 80,
    width: '50%'
  },
  button_text:{
    color:'white'
  }

});

export default App;
