import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterUser from './User';
import USerExist from "./USerExist";

const Login = () => {
  const [ModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [correo, setCorreo] = useState('');
  const [cedula, setCedula] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    const usuario = USerExist(correo, password);
    if (usuario) {
      console.warn('Sesión iniciada correctamente');
      setCorreo('');
      setPassword('');
      navigation.navigate('Home', { usuario });
    } else {
      setCorreo('');
      setPassword('');
      console.warn('Autenticación fallida');
    }
  };
  

  const sendRegister = () =>{
    if (RegisterUser(name, lastname, cedula, correo, password)) {
      setModalVisible(false);
      setName('');
      setLastname('');
      setCedula('');
      setCorreo('');
      setPassword('');
      console.warn('Usuario creado exitosamente');
    }else{
      setName('');
      setLastname('');
      setCedula('');
      setCorreo('');
      setPassword('');
      console.warn('No se pudo crear el usuario');
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electronico"
        placeholderTextColor="#999"
        onChangeText={(text) => setCorreo(text)}
        value={correo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#999"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />

      <View style={styles.botones}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={ModalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.container}>

            <Text style={styles.title}>Registro de usuarios</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre"
              placeholderTextColor="#999"
              onChangeText={(text) => setName(text)}
              value={name}
            />

            <TextInput
              style={styles.input}
              placeholder="Apellido"
              placeholderTextColor="#999"
              onChangeText={(text) => setLastname(text)}
              value={lastname}
            />

            <TextInput
              style={styles.input}
              placeholder="Cedula"
              placeholderTextColor="#999"
              onChangeText={(Number) => setCedula(Number)}
              value={cedula}
            />

            <TextInput
              style={styles.input}
              placeholder="Correo"
              placeholderTextColor="#999"
              onChangeText={(text) => setCorreo(text)}
              value={correo}
            />

            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
            />
            
            <View style={styles.botones}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={sendRegister}>
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  title: {
    fontSize: 25,
    color: '#5195FF',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    color:'#010000'
  },
  button: {
    backgroundColor: '#5195FF',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    margin:15
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
  botones: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

});

export default Login;
