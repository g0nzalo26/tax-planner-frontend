// Conexión a la API de SII para obtener datos de contribuyente con rut y clave

import axios from "axios";

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOWMxYzRkZWY2NDIyMTgwYTg0MjFmN2ExMGJhZDNkODNhZTc0Yjk0NWRiMGE4OGZiZmYzMDViYWExZWNkYjZiNThhM2ZkYjMyMWY1ZTIzYTYiLCJpYXQiOjE3MTA4MjI2MTUsIm5iZiI6MTcxMDgyMjYxNSwiZXhwIjo0ODY2NDk2MjE1LCJzdWIiOiIxNzQ4Iiwic2NvcGVzIjpbXX0.DUIi7_VyMEdp5SAnFHXxNXATUZxaJ6JibUJFNdaSjFxVMpXnmxZv1LDmofrHWopSH_34cpwHmdrfnUXYcxXvnsxGJ7ZLulhZW3a-I4vPnnQ1MP1jWHBt42-viiPoqDdj_EjtatoaxHqnJgCi_5TdLFjnJmDFXHsjZhc6ec50_pC69NgGKphkXbmrbSlmy67E8AA4RbwHENobitspN1HrfKDbvSVRSyRcdxHSbk5obKuRRKJuUhpbf09BJ1rBG4eXILD2AX5nXU2ZlMGtSp0hwwStoeIisJc6bKqR5zNOT-9CYliNDF3P2QpqU9r9CSHxERcc9b--uq-VOXE1fWpuOo31_jYkLzA5zq_nuKw8l-VwMtj6U5GdkYUSODB0suxGGc-3qO8-EG3pHFjlIxYWmFWhGYhbixJitd3w2Jqh8ahAxD6tpdA7s3dRG9qdrFbrdOywTz-6xuX3FAjC2GLjVTxGi6kMr1UBxMMQwDddWr5PeSabjHRbzKaNBhFhEsgzS520ZqArazkkGN0n8bFbmcZFruLWxBHr5zGrBvNFd20lVZIg_qO2VSYr1MnmmsvezzSHzl3q7KYG5LRaVhwtL62oXa_lA5GXQxV9u_SF4IE6cRoz3kYSpw7VKpqmsw1r_xr9Zz-tO0CVz1pilsLTDtngjLFANrXu6k36Bokfi9I'
const headers = {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
    'Content-Type': "application/json",
};

export const api_DataRCV = async (rut:any, clave:any) => {
    try {
        const data = {
            auth: {
                pass: {
                    rut: rut,
                    clave: clave,
                }
            }
        };

        const response = await axios.post(`https://apigateway.cl/api/v1/sii/rcv/compras/resumen/${rut}/201912/REGISTRO?formato=json&certificacion=0`, data, { headers });
        return response.data;
    } catch (error) {
        throw error;
    }
};
