"use client";

import { memoizedRefreshToken as refreshToken } from "@/utils/refreshToken";
import { ACCESS_TOKEN_KEY } from "@/utils/token.constant";
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
        const { response, config } = error;
        const responseData = response?.data;

        // if refresh token not null get new accessToken
        if (responseData.code === 1001 && !config.sent) {
            config.sent = true;
            await refreshToken();

            if (Cookies.get(ACCESS_TOKEN_KEY)) return api(config);
        }

        return Promise.reject(responseData);
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
