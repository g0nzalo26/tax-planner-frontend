// API de monedas para obtener el valor del dolar, euro, etc.

import axios from 'axios';

export const fetchDataMonedas = async () => {
  try {
    const response = await axios.get('https://mindicador.cl/api');
    return response.data;
  } catch (error) {
    console.log('Error al consumir la API:', error);
    throw error;
  }
};
