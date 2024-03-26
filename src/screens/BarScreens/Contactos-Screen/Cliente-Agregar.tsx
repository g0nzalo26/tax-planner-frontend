import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

import { useForm } from '../../../hooks/useForm';
import { BotonAgregar } from '../../../components/Boton-Fab'

interface Props extends StackScreenProps<any, any> { }

export default function ClientesAgregar({ navigation }: Props) {

    // SOLO ESTA EL FORMULARIO DE REGISTRO DE CLIENTES, NADA DE LOGICA

    const { rut, razonS, direccion, ciudad, telefono, correo, urlWeb, onChange } = useForm({
        rut: '',
        razonS: '',
        direccion: '',
        ciudad: '',
        telefono: '',
        correo: '',
        urlWeb: '',
    });


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={Platform.select({ ios: 5, android: 5 })} >

                    <Text style={styles.titulo} >Registro de Clientes</Text>

                    <Text >Rut</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="77.777.777-7"
                        keyboardType='numeric'
                        onChangeText={(value) => onChange(value, 'rut')}
                        value={rut}
                    />

                    <Text >Razón Social</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese la Razón Social"
                        onChangeText={(value) => onChange(value, 'razonS')}
                        value={razonS}
                    />

                    <Text >Dirección</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese la dirección"
                        onChangeText={(value) => onChange(value, 'direccion')}
                        value={direccion}
                    />

                    <Text >Ciudad</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese la ciudad"
                        onChangeText={(value) => onChange(value, 'ciudad')}
                        value={ciudad}
                    />

                    <Text >Teléfono</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingrese el teléfono"
                        keyboardType='numeric'
                        onChangeText={(value) => onChange(value, 'telefono')}
                        value={telefono}
                    />

                    <Text >Correo</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="correo@ejemplo.com"
                        onChangeText={(value) => onChange(value, 'correo')}
                        value={correo}
                    />

                    <Text >URL Web</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="webcliente.cl"
                        onChangeText={(value) => onChange(value, 'urlWeb')}
                        value={urlWeb}
                    />

                    <Button mode="contained">Registrar Cliente</Button>
                </KeyboardAvoidingView>



                {/* <BotonAgregar onPress={() => navigation.navigate('ClientesTB')} /> */}

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

