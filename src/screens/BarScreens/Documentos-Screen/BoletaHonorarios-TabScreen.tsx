import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function BoletaHonorariosTB() {
    return (
        <View style={styles.container}>
            <Text>Boleta Honorarios</Text>
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