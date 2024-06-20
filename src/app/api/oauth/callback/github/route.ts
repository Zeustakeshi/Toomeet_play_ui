import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const { searchParams } = new URL(req.url);

    const code = searchParams.get("code");

    if (!code) redirect("/auth/login");

    const response = await axios({
        method: "GET",
        url: `${process.env.NEXT_SERVER_URL}/oauth/login/github`,
        params: {
            code,
        },
    });
    const { data } = response.data;

    cookies().set("access_token", data.tokens.accessToken, {
        maxAge: 3600,
    });

    cookies().set("refresh_token", data.tokens.refreshToken, {
        maxAge: 3600,
    });
    redirect("/");
};
