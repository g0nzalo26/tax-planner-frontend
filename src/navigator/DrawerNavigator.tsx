// Barra Lateral donde se muestran las opciones de la app

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './DrawerContent';

import ProtectedScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/BarScreens/PerfilUsuario';
import HelpScreen from '../screens/BarScreens/Ayuda';
import ConexionesScreen from '../screens/BarScreens/Conexiones';
import ContabilidadScreen from '../screens/BarScreens/Contabilidad-Screen/Contabilidad';
import ContactosScreen from '../screens/BarScreens/Contactos-Screen/Contactos';
import DocumentosScreen from '../screens/BarScreens/Documentos-Screen/Documentos';
import InformesScreen from '../screens/BarScreens/Informes-Screen/Informes';
import ConfiguracionesScreen from '../screens/BarScreens/Configuraciones';

import FacturasNuevas from '../screens/BarScreens/Documentos-Screen/Factura-Agregar';
import { FacturaDetalleScreen } from '../screens/BarScreens/Documentos-Screen/Factura-Detalle';

import ClientesAgregar from '../screens/BarScreens/Contactos-Screen/Cliente-Agregar';

const Drawer = createDrawerNavigator();

export default function BarraLateral() {
  return (
    // screenOptions={{ headerShown: false }} 
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >

      {/* Interfaces Primarias */}
      <Drawer.Screen name="Pagina Principal" component={ProtectedScreen} />
      <Drawer.Screen name="Perfil de Usuario" component={ProfileScreen} />
      <Drawer.Screen name="Ayuda" component={HelpScreen} />
      <Drawer.Screen name="Conexiones" component={ConexionesScreen} />
      <Drawer.Screen name="Contabilidad" component={ContabilidadScreen} />
      <Drawer.Screen name="Contactos" component={ContactosScreen} />
      <Drawer.Screen name="Documentos" component={DocumentosScreen} />
      <Drawer.Screen name="Informes" component={InformesScreen} />
      <Drawer.Screen name="Configuraciones" component={ConfiguracionesScreen} />

      {/* Interfaces secundarias */}
      <Drawer.Screen name="Agregar Facturas" component={FacturasNuevas} />
      <Drawer.Screen name="Detalle de Factura" component={FacturaDetalleScreen} />

      <Drawer.Screen name="Agregar Clientes" component={ClientesAgregar} />

    </Drawer.Navigator>
  );
}