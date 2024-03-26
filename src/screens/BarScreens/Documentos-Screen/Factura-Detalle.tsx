import React, { useState, useContext, useEffect } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-paper';

import { Documento } from '../../../interfaces/appInterfaces';
import { BotonEditarEliminar } from '../../../components/Boton-Fab';
import { DocContext } from '../../../context/DocContext';

interface Props extends StackScreenProps<any, any> { }

export const FacturaDetalleScreen: React.FC<Props> = ({ navigation, route }: Props) => {

    // El error es que no se esta actualizando el documento a la hora de modificarlo
    // Hay que volver a entrar a la interfaz para que se vea reflejado el cambio


    // Se obtiene el documento 

    const { documento } = route.params as { documento: Documento };

    // Se obtienen las funciones del contexto

    const { cargarDocumentos, actualizarDocumento, eliminarDocumento } = useContext(DocContext);

    // Se inicializan los estados

    const [doc, setDoc] = useState<Documento>(documento);
    const [editando, setEditando] = useState(false);

    // Se actualizan los campos del documento

    const handleChange = (key: keyof Documento, value: string) => {
        setDoc(prevDocumento => ({
            ...prevDocumento,
            [key]: value
        }));
    };

    // Se habilita la edición de los campos del documento

    const handleEditar = () => {
        setEditando(true);
    };

    // Acciones que se pueden realizar al momento de editar un documento

    const handleActualizar = async () => {
        try {

            const documentoEditado: Documento = {
                ...documento,
                fecha: doc.fecha,
                cliente: doc.cliente,
                monto: doc.monto,
                descripcion: doc.descripcion
            };
            await actualizarDocumento(documentoEditado);
            setDoc(documentoEditado);
            setEditando(false);
            cargarDocumentos();


        } catch (error) {
            console.error('Error al editar documento:', error);
        }
    };

    const handleCancelar = () => {
        setDoc(documento);
        setEditando(false);
    };

    const handleEliminar = () => {
        Alert.alert(
            'Confirmar eliminación',
            '¿Está seguro de eliminar este documento?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        try {
                            await eliminarDocumento(documento.num_folio);
                            navigation.navigate('Documentos');

                        } catch (error) {
                            console.error('Error al eliminar documento:', error);
                        }
                    }
                },
            ]
        );
    };


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Numero de Folio</Text>
            <TextInput
                style={styles.input}
                value={documento.num_folio.toString()}
                onChangeText={(text) => handleChange('num_folio', text)}
                placeholder="Número de Folio"
                editable={false}
            />

            <Text style={styles.label}>Fecha</Text>
            <TextInput
                style={styles.input}
                value={editando ? doc.fecha : documento.fecha}
                onChangeText={(text) => handleChange('fecha', text)}
                placeholder="Fecha"
                editable={editando}
            />

            <Text style={styles.label}>Cliente</Text>
            <TextInput
                style={styles.input}
                value={editando ? doc.cliente : documento.cliente}
                onChangeText={(text) => handleChange('cliente', text)}
                placeholder="Cliente"
                editable={editando}
            />

            <Text style={styles.label}>Monto</Text>
            <TextInput
                style={styles.input}
                value={editando ? doc.monto.toString() : documento.monto.toString()}
                onChangeText={(text) => handleChange('monto', text)}
                placeholder="Monto"
                editable={editando}
            />

            <Text style={styles.label}>Descripción</Text>
            <TextInput
                style={styles.input}
                value={editando ? doc.descripcion : documento.descripcion}
                onChangeText={(text) => handleChange('descripcion', text)}
                placeholder="Descripción"
                editable={editando}
            />

            {editando && (
                <>
                    <Button
                        style={styles.boton}
                        onPress={handleActualizar}
                        icon='refresh'
                        mode='contained'
                    >
                        Actualizar
                    </Button>
                    <Button
                        style={styles.boton}
                        mode='contained'
                        onPress={handleCancelar}
                    >
                        Cancelar
                    </Button>
                </>
            )}


            <BotonEditarEliminar onEditar={handleEditar} onEliminar={handleEliminar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
    label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    boton: {
        marginTop: 20,
    }
});

