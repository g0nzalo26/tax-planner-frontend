export interface LoginData {
    correo: string;
    password: string;
}

export interface RegisterData {
    nombre: string;
    correo: string;
    password: string;
}

export interface LoginResponse {
    usuario: Usuario;
    token: string;
}

export interface Usuario {
    estado: boolean;
    google: boolean;
    nombre: string;
    correo: string;
    uid: string;
    img?: string;
}

// Documentos

export interface DocumentosResponse {
    total: number;
    documentos: Documento[];
}

export interface Documento {
    num_folio: string;
    fecha: string;
    cliente: string;
    monto: number;
    descripcion: string;
    categoria: Categoria;
}

export interface Categoria {
    _id:    string;
    nombre: string;
}

export interface CagetoriesResponse {
    total:      number;
    categorias: Categoria[];
}
