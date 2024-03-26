import React, { useState } from "react";
import { View } from "react-native";

import TabsContabilidad from '../../../navigator/TabNavigator';

export default function ContabilidadScreen() {

    // SE IMPORTA LA FUNCION TabsContabilidad DESDE EL ARCHIVO TabNavigator.tsx DONDE ESTAN TODO LOS TABS CORRESPODIENTES A LA CONTABILIDAD

    return (
        <View style={{ flex: 1 }}>
            <TabsContabilidad/>
        </View>
    );
}