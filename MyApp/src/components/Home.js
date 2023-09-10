import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, FlatList } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Home = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [registros, setRegistros] = useState([]);

  const route = useRoute();
  const { usuario } = route.params;

  const handleRegister = () => {
    const now = new Date();
    const registro = {
      fechaIngreso: now.toLocaleDateString(),
      horaIngreso: now.toLocaleTimeString(),
    };
    setRegistros([...registros, registro]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Horas</Text>
      <Button onPress={() => setModalVisible(true)} title="Registrar entrada" />
      <FlatList
        data={registros}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.registroItem}>
            <Text>{`Nombre completo: ${usuario.nombre} ${usuario.apellido}`}</Text>
            <Text>{`Cedula: ${usuario.cedula}`}</Text>
            <Text>{`Fecha de ingreso: ${item.fechaIngreso}`}</Text>
            <Text>{`Hora de ingreso: ${item.horaIngreso}`}</Text>
          </View>
        )}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              date={selectedDate}
              onDateChange={(date) => setSelectedDate(date)}
              mode="date"
            />
            <Button title="Registrar" onPress={handleRegister} style={styles.btnSelect} />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnSelect: {
    padding: 20,
    color: 'green',
  },
  registroItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
});

export default Home;
