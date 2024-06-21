import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
    cookies().set("very-secure", "123", {});
    return NextResponse.json("oke");
};
