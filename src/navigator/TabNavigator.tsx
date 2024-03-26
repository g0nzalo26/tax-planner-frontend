// Vistas del TabNavigator de la app

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import VentasTB from '../screens/BarScreens/Contabilidad-Screen/Venta-TabScreen';
import ComprasTB from '../screens/BarScreens/Contabilidad-Screen/Compra-TabScreen';

import FacturasTB from '../screens/BarScreens/Documentos-Screen/Factura-TabScreen';
import BoletaVentaTB from '../screens/BarScreens/Documentos-Screen/BoletaVenta-TabScreen';
import BoletaHonorariosTB from '../screens/BarScreens/Documentos-Screen/BoletaHonorarios-TabScreen';
import NotaCreditoTB from '../screens/BarScreens/Documentos-Screen/NotaCredito-TabScreen';

import ResumenCVTB from '../screens/BarScreens/Informes-Screen/CompraVenta-TabScreen';
import EstadoResultadoTB from '../screens/BarScreens/Informes-Screen/EstadoResultado-TabScreen';
import FlujoCajaTB from '../screens/BarScreens/Informes-Screen/FlujoCaja-TabScreen';
import ProyeccionImpuestoTB from '../screens/BarScreens/Informes-Screen/ProyeccionImpuesto-TabScreen';

import ClientesTB from '../screens/BarScreens/Contactos-Screen/Cliente-TabScreen';
import ProveedoresTB from '../screens/BarScreens/Contactos-Screen/Proveedor-TabScreen';

const Tab = createMaterialTopTabNavigator();

export default function TabsContabilidad() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ventas" component={VentasTB} />
      <Tab.Screen name="Compras" component={ComprasTB} />
    </Tab.Navigator>
  );
}

export function TabsDocumentos() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
      }}
    >
      <Tab.Screen name="Facturas" component={FacturasTB} />
      <Tab.Screen name="Boleta Ventas" component={BoletaVentaTB} />
      <Tab.Screen name="Boleta Honorarios" component={BoletaHonorariosTB} />
      <Tab.Screen name="Nota Credito" component={NotaCreditoTB} />
    </Tab.Navigator>
  );
}

export function TabsInformes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true
      }}
    >
      <Tab.Screen name="Resumen Compra Venta" component={ResumenCVTB} />
      <Tab.Screen name="Estado Resultado" component={EstadoResultadoTB} />
      <Tab.Screen name="Flujo Caja" component={FlujoCajaTB} />
      <Tab.Screen name="Proyeccion Impuesto" component={ProyeccionImpuestoTB} />
    </Tab.Navigator>
  );
}

export function TabsContactos() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Clientes" component={ClientesTB} />
      <Tab.Screen name="Proveedores" component={ProveedoresTB} />
    </Tab.Navigator>
  );
}

