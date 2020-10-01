import axios from "axios";
import { base_url } from "./variables";

export const getMyInfo = () => {
    return axios.get(`${base_url}/users/my-info/:id`);
};

export const updateMyInfo = () => {
    return axios.patch(`${base_url}/users/actualizar/:id`);
}

export const getMyResults = () => {
    return axios.post(`${base_url}/distribucion-macros/mis-resultados`);
};

export const updateMyResults = () => {}