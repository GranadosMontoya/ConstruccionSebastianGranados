import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TextInput } from 'react-native';
import moment from 'moment-timezone';

function App() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [autenticado, setAutenticado] = useState(false);

  const validarUsuario = () => {
    if (usuario === '123' && contrasena === '123') {
      setAutenticado(true);
    } else {
      Alert.alert('Error', 'Usuario no válido');
    }
  };

  const registrarHoraIngreso = () => {
    const horaIngreso = moment().tz('America/Bogota').format('HH:mm');
    Alert.alert('Ingreso Guardado con Éxito', `Hora de Ingreso: ${horaIngreso}`);
  };

  return (
    <View style={styles.container}>
      {autenticado ? (
        <View style={styles.pantalla}>
          <Text style={styles.texto}>Registrar hora de entrada</Text>
          <Button title="Registrar Hora de Ingreso" onPress={registrarHoraIngreso} />
        </View>
      ) : (
        <View>
          <Text style={styles.texto}>Inicio de Sesión</Text>
          <Text style={styles.mensaje}>User: 123</Text>
          <Text style={styles.mensaje}>Password:123</Text>
          <TextInput
            style={styles.input}
            placeholder="Usuario"
            onChangeText={(text) => setUsuario(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            onChangeText={(text) => setContrasena(text)}
          />
          <Button title="Iniciar Sesión" onPress={validarUsuario} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pantalla: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingLeft: 10,
  },
  mensaje:{
    fontSize:10,
    marginBottom: 20,
  }
});

export default App;
