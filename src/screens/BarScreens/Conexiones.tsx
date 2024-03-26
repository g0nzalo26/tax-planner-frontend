import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { api_DataRCV } from "../../api/Api-SII";

export default function ConexionesScreen() {

  // SE PODRIA AGREAGR UN TAB VIEW CON LA CONEXIÓN AL SII Y A LOS BANCOS

  const [rut, setRut] = useState("");
  const [clave, setClave] = useState("");
  const [dataContribuyente, setDataContribuyente] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {

    try {

      const response = await api_DataRCV(rut, clave);
      console.log('response:', response);
      setDataContribuyente(response);
      setError(null);

    } catch (error: any) {

      console.log('Error al consumir la API:', error);
      setError(error.message);
      setDataContribuyente(null);

    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conexiones:</Text>
      <Text style={styles.titulo}>Bancos</Text>
      <View>
        <Text style={styles.titulo}>¿Quieres ConECtarte al Servicio de Impuestos Internos? </Text>
        <TextInput
          style={styles.input}
          placeholder="11.111.111-1"
          value={rut}
          onChangeText={setRut}

        />
        <TextInput
          style={styles.input}
          placeholder="Ingrese Su Contraseña"
          value={clave}
          onChangeText={setClave}
          // secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Conectarse</Text>
        </TouchableOpacity>
      </View>

      {dataContribuyente && (
        <View>
          <Text style={styles.resultado}>Datos del Contribuyente:</Text>
          <Text>{JSON.stringify(dataContribuyente)}</Text>

        </View>
      )}

    </View>
  );
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
  resultado: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
})