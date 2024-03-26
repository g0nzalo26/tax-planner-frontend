import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform, Alert } from 'react-native'
import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

import { Documento, Categoria } from '../../../interfaces/appInterfaces';
import { useForm } from '../../../hooks/useForm';
import { DocContext } from '../../../context/DocContext';

interface Props extends StackScreenProps<any, any> { }

export default function FacturasNuevas({ navigation }: Props) {

  const { agregarDocumento, cargarDocumentos } = useContext(DocContext);

  const { num_folio, fecha, cliente, monto, descripcion, onChange } = useForm({
    num_folio: '',
    fecha: '',
    cliente: '',
    monto: '',
    descripcion: '',
  });

  // si da error al crear, es posible que sea porque en la BD no existe la categoria con el id que se le asigna
  // Crear una coleccion "categorias" y agregar una categoria con el nombre "FACTURA"
  // Despues copiar el id de la categoria creada y asignarlo a la variable _id de la categoria

  const onPressRegistrar = async () => {

    const nuevaCategoria: Categoria = {
      _id: '65f202269ea1d70b5085b166',
      nombre: 'FACTURA'

    };

    const nuevoDocumento: Documento = {
      num_folio,
      fecha,
      cliente,
      monto: parseFloat(monto),
      descripcion,
      categoria: nuevaCategoria
    };

    try {
      await agregarDocumento(nuevoDocumento);
      Alert.alert('Registro exitoso', 'El documento se ha registrado correctamente', [{ text: 'Ok', onPress: () => navigation.navigate('Documentos') }]);
      cargarDocumentos();

    } catch (error) {
      console.error('Error al registrar documento:', error);
      Alert.alert('Error', 'Ocurrió un error al registrar el documento', [{ text: 'Ok' }]);
    }

  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>


      <View style={styles.container}>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.select({ ios: 5, android: 5 })} >



          <Text style={styles.titulo} >Registro de Facturas</Text>

          <Text>Categoría</Text>
          <TextInput
            style={[styles.input, { backgroundColor: '#f0f0f0' }]}
            placeholder="Factura"
            editable={false}
            value="Factura"
          />

          <Text >Número de Folio</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el número de folio"
            keyboardType='numeric'
            onChangeText={(value) => onChange(value, 'num_folio')}
            value={num_folio}
          />

          <Text >Fecha</Text>
          <TextInput
            style={styles.input}
            placeholder="01-01-2000"
            onChangeText={(value) => onChange(value, 'fecha')}
            value={fecha}
          />

          <Text >Cliente / Proveedor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingrese el nombre del cliente o proveedor"
            onChangeText={(value) => onChange(value, 'cliente')}
            value={cliente}
          />

          <Text >Monto</Text>
          <TextInput
            style={styles.input}
            placeholder="$0.00"
            keyboardType='numeric'
            onChangeText={(value) => onChange(value, 'monto')}
            value={monto}
          />

          <Text >Descripcion</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa una descripcion"
            onChangeText={(value) => onChange(value, 'descripcion')}
            value={descripcion}
          />

          <Button mode="contained" onPress={onPressRegistrar} >Registrar</Button>

        </KeyboardAvoidingView>
      </View>


    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    marginBottom: 20
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    alignItems: 'center',
  },
})

