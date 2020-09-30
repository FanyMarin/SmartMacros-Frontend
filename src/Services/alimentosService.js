import axios from "axios";

export const getAlimentos = () => {
    return axios.get("http://localhost:3000/alimentos/");
};

export const createAlimento = (alimento) => {
    return axios.post("http://localhost:3000/alimentos/crear-alimento", alimento);
}