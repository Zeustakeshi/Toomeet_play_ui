import { NextRequest, userAgent } from "next/server";

export const userDeviceMiddleware = (request: NextRequest) => {
    const { device } = userAgent(request);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    request.headers.set("viewport", viewport);
};
