import axios from "axios";

const API = axios.create({ baseUrl: "http://localhost:8000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).access_token
    }`;
  }

  return req;
});

export const fetchBasket = () => API.get("/baskets");
export const fetchBasketData = () => API.get("/bdata");

export const login = (formData) => API.post(`/auth/login`, formData);
export const register = (formData) => API.post(`/auth/register`, formData);
