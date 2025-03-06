import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

axios.defaults.baseURL = `${BASE_URL}`; // baseURL 전역설정
export const requestAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export default requestAxios;
