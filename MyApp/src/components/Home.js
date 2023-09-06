import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';

const Home = () => {
  // Inicializa selectedDate como un objeto Date con la fecha actual
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [ModalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    // Aquí puedes implementar la lógica de registro de horas.
    // Puedes enviar la fecha (selectedDate) al servidor o realizar acciones locales.
    alert(`Fecha seleccionada: ${selectedDate}`);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Horas</Text>
      <Button
        onPress={() => setModalVisible(true)}
        title="Registrar entrada"
      />
      <Modal
        visible={ModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Agrega esta línea para manejar el cierre del modal
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <DatePicker
              style={{ width: 300 }}
              date={selectedDate}
              mode="date"
              placeholder="Seleccione una fecha"
              format="YYYY-MM-DD"
              confirmBtnText="Confirmar"
              cancelBtnText="Cancelar"
              onDateChange={(date) => setSelectedDate(new Date(date))}
            />
            <Button title="Seleccionar" onPress={handleRegister} style={styles.btnSelect} />
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
  datePicker: {
    width: '80%',
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
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  btnSelect:{
    padding:20,
    color:'green'
  },
});

export default Home;
