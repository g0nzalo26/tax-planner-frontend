import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoletaVentaTB() {
    return (
        <View style={styles.container}>
            <Text>Boleta Venta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})