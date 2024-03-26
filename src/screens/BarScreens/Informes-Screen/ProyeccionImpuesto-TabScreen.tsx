import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function ProyeccionImpuestoTB() {
    return (
        <ScrollView>
            <View style={styles.page}>
                <Text>Proyeccion Impuesto</Text>
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