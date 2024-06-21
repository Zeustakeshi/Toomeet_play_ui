import { NextRequest, NextResponse } from "next/server";
import { userDeviceMiddleware } from "./middleware/userDevice.middleware";

export async function middleware(request: NextRequest) {
    userDeviceMiddleware(request);

    return NextResponse.next({
        request: request,
    });
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
