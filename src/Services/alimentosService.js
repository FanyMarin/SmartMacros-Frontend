import axios from "axios";
import { base_url } from "./variables";

//Obtener todos los alimentos de la DB
export const getAlimentos = () => {
    return axios.get(`${base_url}/alimentos/`);
};

//Obtener los alimentos creados por el usuario loggeado
export const getMisAlimentos = () => {
    return axios.get(`${base_url}/alimentos/mis-alimentos`);
}

//Obtener los detalles de un alimento
export const getAlimentoDetalles = (_id) => {
    return axios.get(`${base_url}/alimentos/${_id}`);
}

//Crear alimento
export const createAlimento = (alimento) => {
    return axios.post(`${base_url}/alimentos/crear-alimento`, alimento);
};

//Actualizar alimento 
export const updateAlimento = (id) => {
    return axios.patch(`${base_url}/alimentos/actualizar/${id}`)
}

//Eliminar alimento
export const deleteAlimento = (id) => {
    return axios.delete(`${base_url}/alimentos/eliminar/${id}`)
}