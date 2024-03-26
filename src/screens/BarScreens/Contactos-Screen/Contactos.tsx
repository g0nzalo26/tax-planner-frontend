import React, { useState } from "react";
import { View } from "react-native";

import { TabsContactos } from "../../../navigator/TabNavigator";

export default function ContactosScreen() {

    // SE IMPORTA LA FUNCION TabsContactos DESDE EL ARCHIVO TabNavigator.tsx DONDE ESTAN TODO LOS TABS CORRESPODIENTES A LOS CONTACTOS

    return (
        <View style={{ flex: 1 }}>
            <TabsContactos />
        </View>
    );
}
