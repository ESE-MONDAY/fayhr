/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import { useCookie } from "next-cookie";

const cookie = useCookie();

// API Base URL

const $API_HOST = process.env.NEXT_PUBLIC_API_URL;

export const AxiosHost = axios.create({
  baseURL: $API_HOST,
});
AxiosHost.interceptors.request.use((config) => { const accessToken = cookie.get("accessToken");
		config.headers = config.headers || {};
		config.headers.Accept = "application/json";
		accessToken && (config.headers.Authorization = `Bearer ${accessToken}`);
		return config;
	},
	(error) => {
		Promise.reject(error);
	}
);

AxiosHost.interceptors.response.use(
	(response) => {
		return response;
	},
  async (error) => {
    const status = error.response.status;

    // if (status === 401) {
		
	// 	window.location.href = '/auth/sign-in';
    // }

    return await Promise.reject(error);
  }
);