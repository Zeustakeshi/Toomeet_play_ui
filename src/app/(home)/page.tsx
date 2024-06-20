"use client";
import api, { isApiError } from "@/lib/api";
import { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
    const [message, setMessage] = useState<string>("");

    function getCookie(name: string) {
        const value = `; ${document.cookie}`;
        const parts: any = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(";").shift();
    }
    useEffect(() => {
        (async () => {
            try {
                const response = await api({
                    method: "get",
                    url: "/hello",
                });
                console.log(response.data);
                setMessage(response.data);
            } catch (error: unknown) {
                if (isApiError(error)) {
                    console.log(error.errors);
                }
            }
        })();
    }, []);

    return (
        <div>
            <h1>Message from server is: {message}</h1>
        </div>
    );
};

export default page;
