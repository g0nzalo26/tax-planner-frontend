import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";


export default function FlujoCajaTB() {
    return (
        <ScrollView>
            <View style={styles.page}>
                <Text>Flujo Caja</Text>
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