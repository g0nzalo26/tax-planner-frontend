// Navegación de Interfaces que se usan en la app

import React, { useContext } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthContext } from '../context/AuthContext';

import BarraLateral from '../navigator/DrawerNavigator';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ProtectedScreen from '../screens/HomeScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import IndexScreen from '../screens/IndexScreen';

const Stack = createNativeStackNavigator();

export default function Navigator() {

  const { status } = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />

  return (
    <SafeAreaView style={{ flex:1 }}>
      <StatusBar barStyle="default" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >

        {
          (status !== 'authenticated')
            ? (
              <>
                <Stack.Screen name="IndexScreen" component={IndexScreen} />
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
              </>
            )
            : (
              <>
                <Stack.Screen options={{ headerShown: false }} name="MainScreen">
                  {() => (
                    <>
                      <BarraLateral />
                      <Stack.Screen name="Pagina Principal" component={ProtectedScreen} />
                    </>
                  )}
                </Stack.Screen>
              </>
            )
        }
      </Stack.Navigator>
    </ SafeAreaView>
  );
}