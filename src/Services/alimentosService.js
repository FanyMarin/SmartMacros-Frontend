import axios from "axios";
import { base_url } from "./variables";

export const getAlimentos = () => {
    return axios.get(`${base_url}/alimentos/`);
};

export const getMisAlimentos = () => {
    return axios.get(`${base_url}/alimentos/mis-alimentos`);
}

export const createAlimento = (alimento) => {
    return axios.post(`${base_url}/alimentos/crear-alimento`, alimento);
};