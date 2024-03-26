import React, { createContext, useEffect, useState } from "react";
import api from "../api/Api";
import { Documento, DocumentosResponse } from "../interfaces/appInterfaces";

type DocContextProps = {
    documentos: Documento[];
    cargarDocumentos: () => Promise<void>;
    agregarDocumento: (nuevoDocumento: Documento) => Promise<Documento>;
    actualizarDocumento: (documentoEditado: Documento) => Promise<Documento>;
    eliminarDocumento: (num_folio: string) => Promise<void>;
}

export const DocContext = createContext({} as DocContextProps);

export const DocProvider = ({ children }: any) => {

    const [documentos, setDocumentos] = useState<Documento[]>([]);

    useEffect(() => {
        cargarDocumentos();
    }, []);

    const cargarDocumentos = async () => {
        try {
            const resp = await api.get<DocumentosResponse>('/documentos');
            setDocumentos([...resp.data.documentos]);
        } catch (error) {
            console.error('Error al cargar documentos:', error);
            throw error;
        }
    }

    const agregarDocumento = async (nuevoDocumento: Documento): Promise<Documento> => {
        try {
            const resp = await api.post<Documento>('/documentos', nuevoDocumento);
            setDocumentos([...documentos, resp.data]);
            return resp.data;
        } catch (error) {
            console.error('Error al agregar documento:', error);
            throw error;
        }
    }

    const actualizarDocumento = async (documentoEditado: Documento): Promise<Documento> => {
        try {
            const resp = await api.put<Documento>(`/documentos/${documentoEditado.num_folio}`, documentoEditado);
            const nuevosDocumentos = documentos.map(doc => {
                return (doc.num_folio === resp.data.num_folio) ? resp.data : doc;
            });
            setDocumentos([...nuevosDocumentos]);
            return resp.data;
        } catch (error) {
            console.error('Error al editar documento:', error);
            throw error;
        }
    }

    const eliminarDocumento = async (num_folio: string): Promise<void> => {
        try {
            await api.delete(`/documentos/${num_folio}`);
            const nuevosDocumentos = documentos.filter(doc => doc.num_folio !== num_folio);
            setDocumentos([...nuevosDocumentos]);
        } catch (error) {
            console.error('Error al eliminar documento:', error);
            throw error;
        }

    }



    return (
        <DocContext.Provider value={{
            documentos,
            cargarDocumentos,
            agregarDocumento,
            actualizarDocumento,
            eliminarDocumento
        }}
        >
            {children}
        </DocContext.Provider>

    )
}