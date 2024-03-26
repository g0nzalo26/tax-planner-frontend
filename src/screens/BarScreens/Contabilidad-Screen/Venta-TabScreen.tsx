import React from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
interface Props extends StackScreenProps<any, any> { }


export default function VentasTB({ navigation }: Props) {

    return (
        <ScrollView>
            <View style={styles.page}>
                <Text>Ventas</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
    }
}) 