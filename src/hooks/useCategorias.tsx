import { useEffect, useState } from "react"
import api from "../api/Api"
import { CagetoriesResponse, Categoria } from '../interfaces/appInterfaces';


export const useCategorias = () => {
    
    const [ isLoading, setIsLoading ] = useState( true )
    const [ categorias, setCategorias ] = useState<Categoria[]>([]);
    
    useEffect(() => {
        getCategories();
    }, [])


    const getCategories = async() => {
        const resp = await api.get<CagetoriesResponse>('/categorias');
        setCategorias( resp.data.categorias );
        setIsLoading(false);
    }


    return {
        isLoading,
        categorias
    }
}
