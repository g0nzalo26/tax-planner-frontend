import React, { useContext, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Alert } from "react-native";
import { Button } from "react-native-paper";
import { StackScreenProps } from '@react-navigation/stack';


import { useForm } from '../hooks/useForm';
import { AuthContext } from "../context/AuthContext";

interface Props extends StackScreenProps<any, any> { }

export default function LoginScreen({ navigation }: Props) {

  const { singIn, errorMessage, removeError } = useContext(AuthContext)

  const { email, password, onChange } = useForm({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;

    Alert.alert('Inicio de Sesion Incorrecto', errorMessage, [{ text: 'Ok', onPress: removeError }]);
  }, [errorMessage])

  const onLogin = () => {
    Keyboard.dismiss()
    singIn({ correo: email, password })
  };

  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior={(Platform.OS === 'ios' ? 'padding' : 'height')}>
        <View style={styles.container}>
          <View>
            <Text style={styles.titulo}>Iniciar Sesion</Text>

            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa Tu Correo"
              keyboardType="email-address"
              onChangeText={(value) => onChange(value, 'email')}
              value={email}
              onSubmitEditing={onLogin}

            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa Tu Contraseña"
              onChangeText={(value) => onChange(value, 'password')}
              value={password}
              onSubmitEditing={onLogin}
              secureTextEntry={true}

            />

            <TouchableOpacity style={{ flexDirection: "row-reverse", paddingTop: 10 }}>
              <Text>¿Olvidaste Tú Contraseña?</Text>
            </TouchableOpacity>

          </View>

          <View style={{ paddingBottom: 20 }}>
            <Button style={styles.boton} icon="login" mode="contained" onPress={onLogin}>
              Ingresar
            </Button>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center' }}>
            <Text>¿No tienes Cuenta? </Text>
            <TouchableOpacity >
              <Text
                style={{ color: 'blue', textDecorationLine: 'underline' }}
                onPress={() => navigation.replace('RegisterScreen')}
              >
                Registrate Aqui
              </Text>
            </TouchableOpacity>
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
    borderRadius: 5,
  },

  boton: {
    marginTop: 20,
    borderWidth: 1,
  }
});