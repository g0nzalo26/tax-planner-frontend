import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { DocContext } from '../../../context/DocContext';

import { ListaDocumentos } from '../../../components/ListaDocumentos';
import { LoadingScreen } from '../../LoadingScreen';
import { Documento } from '../../../interfaces/appInterfaces'

import { BotonAgregar } from '../../../components/Boton-Fab';

interface Props extends StackScreenProps<any, any> { }

export default function FacturasTB({ navigation }: Props) {

    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { documentos, cargarDocumentos } = useContext(DocContext);

    useEffect(() => {
        cargarDocumentosFromBackend();
    }, []);

    const cargarDocumentosFromBackend = async () => {
        setIsLoading(true);
        setIsRefreshing(true);
        await cargarDocumentos();
        setIsRefreshing(false);
        setIsLoading(false);
    };

    const navigateDetalleFactura = (documento: Documento) => {
        navigation.navigate('Detalle de Factura', { documento });
    };

    const navigateNuevaFactura = () => {
        navigation.navigate('Agregar Facturas');
    }


    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <View style={styles.container}>
            {
                documentos.length > 0 ? (
                    <ListaDocumentos
                        documentos={documentos}
                        refreshing={isRefreshing}
                        onRefresh={cargarDocumentosFromBackend}
                        onPressItem={navigateDetalleFactura}
                    />
                ) : (
                    <View style={styles.container2}>
                        <Text>No hay Facturas Registradas</Text>
                    </View>
                )
            }
            <BotonAgregar onPress={navigateNuevaFactura} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
