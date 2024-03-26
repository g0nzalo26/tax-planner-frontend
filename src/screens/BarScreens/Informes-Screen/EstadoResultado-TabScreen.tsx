import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function EstadoResultadoTB() {
    return (
        <ScrollView>
            <View style={styles.page}>
                <Text>Estado Resultado</Text>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        marginBottom: 20
    },
})