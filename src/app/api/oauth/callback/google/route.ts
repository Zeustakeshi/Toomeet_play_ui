import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "@/utils/token.constant";
import axios from "axios";
import moment from "moment";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    if (!code) redirect("/auth/login");

    const response = await axios({
        method: "GET",
        url: `${process.env.NEXT_SERVER_URL}/oauth/login/google`,
        params: {
            code,
        },
    });
    const { data } = response.data;

    cookies().set(ACCESS_TOKEN_KEY, data.tokens.accessToken, {
        maxAge: data.tokens.accessTokenExpiresIn,
    });

    cookies().set(REFRESH_TOKEN_KEY, data.tokens.refreshToken, {
        maxAge: data.tokens.refreshTokenExpiresIn,
    });

    redirect("/");
};
