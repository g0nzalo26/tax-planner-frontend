import { Usuario } from '../interfaces/appInterfaces';

export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    user: Usuario | null;
}

type AuthAction = 
    | { type: 'singUp', payload: { token: string, user: Usuario } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logout' }

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                user: null,
                status: 'not-authenticated',
                token: null,
                errorMessage: action.payload
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'singUp':
            return {
                ...state,
                errorMessage: '',
                status: 'authenticated',
                token: action.payload.token,
                user: action.payload.user
            }
        case 'notAuthenticated':
        case 'logout':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                user: null
            }
        default:
            return state;
    }
}