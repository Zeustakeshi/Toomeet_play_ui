import React, { ReactNode } from "react";
import { cookies } from "next/headers";
import { REFRESH_TOKEN_KEY } from "@/utils/token.constant";
import { redirect } from "next/navigation";

type Props = {
    children: ReactNode;
};

const layout = ({ children }: Props) => {
    if (cookies().has(REFRESH_TOKEN_KEY)) redirect("/");

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="shadow-2xl min-w-[500px] min-h-[500px]  rounded-md p-5">
                {children}
            </div>
        </div>
    );
};

export default layout;
