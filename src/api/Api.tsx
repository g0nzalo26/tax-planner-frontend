// Conexión con el Backend de la aplicación usando axios y AsyncStorage para el manejo de tokens

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://192.168.1.83:8080/api'

const api = axios.create({ baseURL })

api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers['x-token'] = token;
        }
        return config;
    })

export default api