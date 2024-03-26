import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';

import { BotonAgregar } from '../../../components/Boton-Fab'

interface Props extends StackScreenProps<any, any> { }

export default function ClientesTB({ navigation }: Props) {

    return (

        <View style={styles.container}>
            <Text>Lista de Clientes</Text>
            <BotonAgregar onPress={() => navigation.navigate('Agregar Clientes')} />
        </View>



    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

