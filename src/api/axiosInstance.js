import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const ref = sessionStorage.getItem("ref");

        if (ref) {
            config.headers["Referral"] = ref;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
