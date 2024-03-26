// Ventana Modal para seleccionar el tipo de usuario (Persona Natural o Empresa)
// Debera Mostrarse cuando la persona se registre por primera vez en la app
// Sacar de components

import React, { useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";
import { Button, RadioButton } from 'react-native-paper'

export default function ModalTipeUser() {

    const [value, setValue] = React.useState('personaNatural');
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    setModalVisible(false);
  };

  return (

<View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }} >

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text>Selecciona el Tipo de Usuario</Text>
                <RadioButton.Group onValueChange={handleChange} value={value}>
                  <RadioButton.Item label="Persona Natural" value="personaNatural" />
                  <RadioButton.Item label="Empresa" value="empresa" />
                </RadioButton.Group>

                <Button onPress={() => setModalVisible(false)} > Cerrar </Button>
              </View>
            </View>
          </Modal>

          <Button
            mode="contained"
            style={{ margin: 5 }}
            onPress={() => setModalVisible(true)}
          >
            Tipo de Usuario (Una Vez Post Registro)
          </Button>

        </View>

)}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 10,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
})