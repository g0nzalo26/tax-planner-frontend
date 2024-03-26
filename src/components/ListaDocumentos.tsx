// Componente que muestra la lista de documentos en TabViews

import React from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TouchableOpacity } from 'react-native';
import { Documento } from '../interfaces/appInterfaces';

interface ListaDocumentosProps {
  documentos: Documento[];
  refreshing: boolean;
  onRefresh: () => void;
  onPressItem: (documento: Documento) => void;
}

export const ListaDocumentos: React.FC<ListaDocumentosProps> = ({ documentos, refreshing, onRefresh, onPressItem }) => {

  return (

    <FlatList
      data={documentos}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onPressItem(item)} key={item.num_folio}>
          <View style={styles.documentoContainer}>

            <Text style={styles.titulo}>Número de Folio: {item.num_folio} </Text>

            <View style={styles.subtitulo}>

              <Text style={styles.cliente} >Cliente: {item.cliente} | </Text>
              <Text style={styles.monto} >$: {item.monto}</Text>
            </View>

            <View style={styles.descripcion}>
              <Text>Descripción: {item.descripcion}</Text>
            </View>

          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item: Documento) => item.num_folio}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />

      }
    />

  );
}

const styles = StyleSheet.create({
  documentoContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  subtitulo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cliente: {
    fontSize: 13,
  },
  monto: {
    fontSize: 13,

  },
  descripcion: {

  },
});

