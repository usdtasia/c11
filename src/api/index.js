import axios from "axios";

const $api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

$api.interceptors.request.use(
    (config) => {
        const ref = sessionStorage.getItem("ref");

        const token =
            localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        if (ref) {
            config.headers["Referral"] = ref;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default $api;
