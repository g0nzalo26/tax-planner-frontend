import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabsDocumentos } from "../../../navigator/TabNavigator";

export default function DocumentosScreen() {

    // SE IMPORTA LA FUNCION TabsDocumentos DESDE EL ARCHIVO TabNavigator.tsx DONDE ESTAN TODO LOS TABS CORRESPODIENTES A LOS DOCUMENTOS

    return (
        <View style={{ flex: 1 }}>
            <TabsDocumentos />
        </View>
    );
}
