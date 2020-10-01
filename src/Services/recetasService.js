import axios from "axios";
import { base_url } from "./variables";

export const getRecetas = () => {
    return axios.get(`${base_url}/recetas`);
};

export const getMisRecetas = () => {
    return axios.get(`${base_url}/recetas/mis-recetas`);
}

export const createReceta = (receta) => {
    return axios.post(`${base_url}/recetas/crear-receta`, receta);
};