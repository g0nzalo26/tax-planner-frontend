import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function ProveedoresTB() {
    return (
        <ScrollView>
            <View style={styles.page}>
                <Text>Proveedores</Text>
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