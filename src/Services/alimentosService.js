import axios from "axios";

export const getAlimentos = () => {
    return axios.get("http://localhost:3000/alimentos/");
};
