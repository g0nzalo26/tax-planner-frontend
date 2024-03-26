import React, { useContext } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper"; 

import { AuthContext } from "../../context/AuthContext";

export default function ProfileScreen() {

  // SE PODRIA AGREGAR UN TAB VIEW DATOS DE USUARIO Y DATOS EMPRESARIALES O ALGO ASI

  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: user?.img || "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" }}
        style={ styles.imagenPerfil }
      />
      <View style={ styles.infoUsuario }>
        <Text style={ styles.datos }>{ user?.nombre }</Text>
        <Text style={{ fontSize:15 }}>{ user?.correo }</Text>
      </View>
      <Button style={ styles.boton } icon='pencil' mode="elevated">Editar Perfil</Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  imagenPerfil: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginVertical: 50,
  },
  infoUsuario: {
    alignItems: "center",
  },
  datos:{
    fontSize: 25,
    fontWeight: 'bold',
  },
  boton:{
    marginTop: 20,
    padding: 5,
  }

});
