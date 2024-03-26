// // Contenido de la barra lateral de la app

// import React, { useContext } from "react";
// import { View, StyleSheet } from "react-native";
// import { Avatar, Title, Caption, Drawer } from "react-native-paper";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import { MaterialIcons } from '@expo/vector-icons';
// import { AuthContext } from '../context/AuthContext';


// export function DrawerContent(props: any) {

//     const { user, logOut } = useContext(AuthContext)

//     return (
//         <View style={{ flex: 1 }}>

//             <DrawerContentScrollView {...props}>
//                 <View style={{ flexDirection: 'row', marginTop: 15 }}>
//                     <Avatar.Image
//                         source={{
//                             uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
//                         }}
//                         size={100}
//                         style={{ marginLeft: 15 }}
//                     />
//                     <View style={{ marginLeft: 15, flexDirection: 'column', flex:1 }}>
//                         <Title style={ styles.titulo }>
//                             {user?.nombre}
//                         </Title>
//                         <Caption style={styles.correo} numberOfLines={2}>
//                             {user?.correo}
//                         </Caption>
//                     </View>
//                 </View>

//                 <View>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="home" size={24} color="black" />
//                             )}
//                             label="Home"
//                             onPress={() => { props.navigation.navigate('Pagina Principal') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="calculate" size={24} color="black" />
//                             )}
//                             label="Contabilidad"
//                             onPress={() => { props.navigation.navigate('Contabilidad') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="edit-document" size={24} color="black" />
//                             )}
//                             label="Documentos"
//                             onPress={() => { props.navigation.navigate('Documentos') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="folder-open" size={24} color="black" />
//                             )}
//                             label="Informes"
//                             onPress={() => { props.navigation.navigate('Informes') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="people-alt" size={24} color="black" />
//                             )}
//                             label="Contactos"
//                             onPress={() => { props.navigation.navigate('Contactos') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="person" size={24} color="black" />
//                             )}
//                             label="Perfil de Usuario"
//                             onPress={() => { props.navigation.navigate('Perfil de Usuario') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="api" size={24} color="black" />
//                             )}
//                             label="Conexiones"
//                             onPress={() => { props.navigation.navigate('Conexiones') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="settings" size={24} color="black" />
//                             )}
//                             label="Configuraciones"
//                             onPress={() => { props.navigation.navigate('Configuraciones') }}
//                         />
//                     </Drawer.Section>
//                     <Drawer.Section>
//                         <DrawerItem
//                             icon={({ color, size }) => (
//                                 <MaterialIcons name="help" size={24} color="black" />
//                             )}
//                             label="Ayuda"
//                             onPress={() => { props.navigation.navigate('Ayuda') }}
//                         />
//                     </Drawer.Section>

//                 </View>
//             </DrawerContentScrollView>

//             <Drawer.Section>
//                 <DrawerItem
//                     icon={({ color, size }) => (
//                         <MaterialIcons name="exit-to-app" size={24} color="black" />
//                     )}
//                     label="Cerrar Sesion"
//                     onPress={logOut}
//                 />
//             </Drawer.Section>

//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     drawerContent: {
//         flex: 1,
//     },

//     titulo:{
//         fontSize: 20,
//         fontWeight: 'bold'
//     },

//     correo: {
//         fontSize: 12,
//         lineHeight: 14,
//         flexWrap: 'wrap'
//     }


// });

// Contenido de la barra lateral de la app ( DrawerNavigator)

import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Title, Drawer } from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialIcons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

interface MenuItem {
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    destination?: string;
    onPress?: () => void;
}

const menuItems: MenuItem[] = [
    { label: "Página Principal", icon: "home", destination: 'Pagina Principal'},
    { label: "Contabilidad", icon: "calculate", destination: 'Contabilidad' },
    { label: "Documentos", icon: "edit-document", destination: 'Documentos' },
    { label: "Informes", icon: "folder-open", destination: 'Informes' },
    { label: "Contactos", icon: "people-alt", destination: 'Contactos' },
    { label: "Perfil de Usuario", icon: "person", destination: 'Perfil de Usuario' },
    { label: "Conexiones", icon: "api", destination: 'Conexiones' },
    { label: "Configuraciones", icon: "settings", destination: 'Configuraciones' },
    { label: "Ayuda", icon: "help", destination: 'Ayuda' },
];

const DrawerMenuItem: React.FC<{
    label: string;
    icon: keyof typeof MaterialIcons.glyphMap; 
    destination?: string; 
    navigation: any;
    onPress?: () => void;
}> = ({ label, icon, destination, navigation, onPress }) => (
    <Drawer.Section>
        <DrawerItem
            icon={({ color, size }) => (
                <MaterialIcons name={icon} size={24} color="black" /> 
            )}
            label={label}
            onPress={() => {
                if (destination){
                    navigation.navigate(destination);
                }     
                onPress && onPress(); 
            }}
        />
    </Drawer.Section>
);

export const DrawerContent: React.FC<{ navigation: any }> = (props) => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
                        }}
                        size={100}
                        style={{ marginLeft: 15 }}
                    />
                    <View style={{ marginLeft: 15, flexDirection: 'column', flex: 1 }}>
                        <Title style={styles.titulo}>
                            {user?.nombre}
                        </Title>
                    </View>
                </View>

                {menuItems.map((item, index) => (
                    <DrawerMenuItem
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        destination={item.destination}
                        navigation={props.navigation}
                        onPress={item.onPress}
                    />
                ))}
            </DrawerContentScrollView>

            <DrawerMenuItem
                label="Cerrar Sesión"
                icon="exit-to-app"
                onPress={logOut}
                navigation={props.navigation}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    correo: {
        fontSize: 12,
        lineHeight: 14,
        flexWrap: 'wrap'
    }
});
