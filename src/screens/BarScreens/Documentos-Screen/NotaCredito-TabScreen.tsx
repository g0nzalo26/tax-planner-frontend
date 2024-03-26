import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function NotaCreditoTB() {
    return (
        <View style={styles.container}>
            <Text>Nota Crédito</Text>
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