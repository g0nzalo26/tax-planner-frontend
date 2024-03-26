import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { }

export default function IndexScreen({ navigation }: Props) {

    return (
        <View style={styles.container}>
            <Image style={styles.imagen} source={require('../../assets/React-icon.png')} />
            <Text style={styles.titulo}>TaxPlanner App</Text>
            <Text style={styles.subTitulo}>
                ¡Transforma tu futuro financiero: Accede, Aprende y Cumple con tus finanzas en nuestra plataforma todo en uno.!
            </Text>

            <TouchableOpacity>
                <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('LoginScreen')} >
                    Iniciar Sesión
                </Button>
            </TouchableOpacity>

            <TouchableOpacity>
                <Button style={styles.boton} mode="contained" onPress={() => navigation.navigate('RegisterScreen')} >
                    Registrarse
                </Button>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    imagen: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },

    titulo: {
        fontSize: 30,
        marginBottom: 30,
        fontWeight: 'bold',
    },

    subTitulo: {

        paddingHorizontal: 20,
        textAlign: 'center',
    },

    boton: {
        marginTop: 20,
        borderWidth: 1,
        width: 300,

    }
})