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
    const accessTokenExpirationDate = moment(data.accessTokenExpiresIn);
    const refreshTokenExpirationDate = moment(data.refreshTokenExpiresIn);

    cookies().set("access_token", data.tokens.accessToken, {
        maxAge: accessTokenExpirationDate.diff(moment(), "seconds"),
    });

    cookies().set("refresh_token", data.tokens.refreshToken, {
        maxAge: refreshTokenExpirationDate.diff(moment(), "seconds"),
    });

    redirect("/");
};
