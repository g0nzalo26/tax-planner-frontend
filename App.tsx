import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';
import { DocProvider } from './src/context/DocContext'

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      <DocProvider>
        {children}
      </DocProvider>
    </AuthProvider>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
}


