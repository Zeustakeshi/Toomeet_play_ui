"use client";

import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});

api.interceptors.request.use(
    (request) => {
        const token = Cookies.get("access_token");
        if (token) {
            request.headers["Authorization"] = `Bearer ${token}`;
        }
        return request;
    },
    (error: any) => {
        return error;
    }
);

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const responseData = error?.response?.data;
        return Promise.reject(responseData);

        // if ((status === 401 || status === 403) && !config.sent) {
        //     config.sent = true;

        //     if (token) {
        //         config.headers["Authorization"] = `Bearer ${token}`;
        //     }
        //     return api(config);
        // }

        // const message = error?.response?.data?.message;
        // if (message) return Promise.reject(message);
        // return Promise.reject(`Đã có lỗi xảy ra vui lòng thử lại sau. `);
    }
);

export type ApiError = {
    code: number;
    path: string;
    errors: any;
};

export const isApiError = (error: unknown): error is ApiError => {
    return (
        typeof error === "object" &&
        error !== null &&
        "path" in error &&
        "code" in error &&
        "errors" in error
    );
};
export default api;
