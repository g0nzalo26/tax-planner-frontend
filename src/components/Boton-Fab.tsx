import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Provider } from 'react-native-paper';

// Boton para agregar documentos

interface BotonFABProps {
  onPress: () => void;
}

export const BotonAgregar: React.FC<BotonFABProps> = ({ onPress }) => {
  return (
    <FAB
      style={styles.fab}
      icon='plus'
      onPress={onPress}
    />
  );
};

// Boton para editar o eliminar documentos

interface BotonEditarEliminarProps {
  onEditar: () => void;
  onEliminar: () => void;
}

export const BotonEditarEliminar: React.FC<BotonEditarEliminarProps> = ({ onEditar, onEliminar }) => {

  const [open, setOpen] = useState(false);

  return (
    <Provider>
      <Portal>
        <FAB.Group
          backdropColor='transparent'
          open={open}
          visible
          icon={open ? 'minus' : 'dots-vertical'}

          actions={[
            {
              icon: 'pencil',
              label: 'Editar',
              onPress: onEditar
            },
            {
              icon: 'delete',
              label: 'Eliminar',
              onPress: onEliminar
            },
          ]}

          onStateChange={({ open }) => setOpen(open)}
        />
      </Portal>
    </Provider>
  );
};

// Crear Boton para chat 





const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },

})