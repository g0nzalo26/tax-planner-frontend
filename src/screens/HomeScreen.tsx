import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Modal, Pressable } from "react-native";
import { Button, RadioButton } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack';

import { AuthContext } from "../context/AuthContext";
import ModalTipeUser from '../components/Modal-TipoUsuario'

interface Props extends StackScreenProps<any, any> { }

export default function ProtectedScreen({ navigation }: Props) {

  const { user } = useContext(AuthContext)
  const [value, setValue] = React.useState('personaNatural');
  const [modalVisible, setModalVisible] = useState(false);

  const handleChange = (newValue: any) => {
    setValue(newValue);
    setModalVisible(false);
  };

  return (

    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} >

        {/* <Text style={styles.titulo}>Bienvenido {user?.nombre}</Text> */}

        {/* <ModalTipeUser /> */}

        <Button
          // mode="contained"
          style={styles.button}>
          Selecciona un periodo de tiempo
        </Button>

        <View style={styles.seccionItem}>
          <View style={styles.row}>
            <Text style={styles.contentItem}>Neto:</Text>
            <Text style={styles.contentValue}>$ 4129500.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.contentItem}>IVA:</Text>
            <Text style={styles.contentValue}>$ 784605.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.contentItem}>Ventas:</Text>
            <Text style={styles.contentValue}>$ 4914105.00</Text>
          </View>
        </View>

        <View style={styles.seccionItem}>
          <View style={styles.row}>
            <Text style={styles.contentItem}>Neto:</Text>
            <Text style={styles.contentValue}>$ 1119205.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.contentItem}>IVA:</Text>
            <Text style={styles.contentValue}>$ 212649.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.contentItem}>Compras:</Text>
            <Text style={styles.contentValue}>$ 1331854.00</Text>
          </View>
        </View>

        <View style={styles.seccionItem}>
          <View style={styles.row}>
            <Text style={styles.contentItem}>Impuesto:</Text>
            <Text style={styles.contentValue}>$ 571956.00</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.contentItem}>Fecha Pagar:</Text>
            <Text style={styles.contentValue}>20 del Mes Siguiente</Text>
          </View>
        </View>

        <View>
          <Text style={styles.grafico}>
            Grafico de Resumen de Periodo
          </Text>

        </View>

      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  seccionItem: {
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentItem: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  contentValue: {
    fontSize: 16,
    color: '#333',
  },
  grafico: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },

});