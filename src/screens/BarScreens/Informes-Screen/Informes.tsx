import React, { useState } from "react";
import { View } from "react-native";
import { TabsInformes } from "../../../navigator/TabNavigator";

export default function InformesScreen() {

    // SE IMPORTA LA FUNCION TabsInformes DESDE EL ARCHIVO TabNavigator.tsx DONDE ESTAN TODO LOS TABS CORRESPODIENTES A LOS INFORMES

    return (
        <View style={{ flex: 1}}>
            <TabsInformes />
        </View>
    );
}
