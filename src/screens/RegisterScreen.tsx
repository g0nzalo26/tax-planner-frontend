import React, { useContext, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from "react-native";
import { Button } from "react-native-paper";
import { StackScreenProps } from '@react-navigation/stack';

import { useForm } from '../hooks/useForm';
import { AuthContext } from "../context/AuthContext";

interface Props extends StackScreenProps<any, any> { }

export default function RegisterScreen({ navigation }: Props) {

  const { singUp, errorMessage, removeError } = useContext(AuthContext)

  const { nombre, correo, password, onChange } = useForm({
    nombre: '',
    correo: '',
    password: ''
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Inicio de Sesion Incorrecto', errorMessage, [{ text: 'Ok', onPress: removeError }]);
  }, [errorMessage])

  const onRegister = () => {
    Keyboard.dismiss()
    singUp({ nombre, correo, password });
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios' ? 'padding' : 'height')}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titulo}>Registrarse</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa Tu Nombre"
              onChangeText={(value) => onChange(value, 'nombre')}
              value={nombre}
              onSubmitEditing={onRegister}
            />

            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa Tu Correo"
              keyboardType="email-address"
              onChangeText={(value) => onChange(value, 'correo')}
              value={correo}
              onSubmitEditing={onRegister}

            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa Tu Contraseña"
              onChangeText={(value) => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onRegister}
              secureTextEntry={true}
            />

          </View>

          <View style={{ paddingBottom: 20 }}>
            <Button icon='plus' style={styles.boton} mode="contained" onPress={onRegister}>
              Crear Cuenta
            </Button>
          </View>

          <View>
            <View style={{ flexDirection: "row", justifyContent: 'center' }}>
              <Text>¿Ya tienes Cuenta? </Text>
              <TouchableOpacity >
                <Text
                  style={{ color: 'blue', textDecorationLine: 'underline' }}
                  onPress={() => navigation.replace('LoginScreen')}
                >
                  Inicia Sesión Aqui
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },

  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5
  },

  boton: {
    marginTop: 20,
    borderWidth: 1,
  }
});