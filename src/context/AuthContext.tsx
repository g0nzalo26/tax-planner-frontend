import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LoginData, LoginResponse, Usuario, RegisterData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';
import api from '../api/Api';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    singUp: (registerData: RegisterData) => void;
    singIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: '',
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState)

    useEffect(() => {
        validarToken();
    }, [])

    const validarToken = async () => {
        const token = await AsyncStorage.getItem('token')

        // No Hay Token 
        if (!token) return dispatch({ type: 'notAuthenticated' });

        // Hay Token
        const resp = await api.get('/auth');

        if (resp.status !== 200) {
            return dispatch({ type: 'notAuthenticated' });
        }

        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
            type: 'singUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })
    }


    const singIn = async ({ correo, password }: LoginData) => {
        try {
            const resp = await api.post<LoginResponse>('/auth/login', { correo, password });
            dispatch({
                type: 'singUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            })

            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error:any) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }
    };

    const singUp = async ({ nombre, correo, password }: RegisterData) => {
        try {
            const resp = await api.post<LoginResponse>('/usuarios', { nombre, correo, password });
            dispatch({
                type: 'singUp',
                payload: {
                    token: resp.data.token,
                    user: resp.data.usuario
                }
            })

            await AsyncStorage.setItem('token', resp.data.token);

        } catch (error:any) {
            dispatch({
                type: 'addError',
                payload: error?.response?.data?.msg || 'Revisa la información ingresada'
            })
        }
    };


    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' });
    };


    const removeError = () => {
        dispatch({ type: 'removeError' })
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            singUp,
            singIn,
            logOut,
            removeError

        }}>
            {children}

        </ AuthContext.Provider>
    )
}