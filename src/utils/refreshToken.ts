import api from "@/lib/api";
import Cookies from "js-cookie";
import mem from "mem";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "./token.constant";

const refreshToken = async () => {
    const refreshToken = Cookies.get("refresh_token");

    if (!refreshToken) {
        localStorage.removeItem("user");
        return;
    }
    try {
        const { data } = await api({
            method: "POST",
            url: "/auth/refresh-token",
            data: {
                token: refreshToken,
            },
        });

        Cookies.set(ACCESS_TOKEN_KEY, data.data.accessToken, {
            expires: new Date(
                new Date().getTime() + data.data.accessTokenExpiresIn
            ),
        });

        Cookies.set(REFRESH_TOKEN_KEY, data.data.refreshToken, {
            expires: new Date(
                new Date().getTime() + data.data.refreshTokenExpiresIn
            ),
        });
    } catch (error) {
        console.log("Refresh token error " + error);
    }
};

const maxAge = 10000;
export const memoizedRefreshToken = mem(refreshToken, {
    maxAge,
});
