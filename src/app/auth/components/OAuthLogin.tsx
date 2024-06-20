"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

type Props = {
    className?: string;
};

const OAuthLogin = ({ className }: Props) => {
    const handleLoginWithGoogle = async () => {
        const response = await axios.get(
            "http://localhost:8080/api/v1/oauth/google"
        );
        const data = response.data;
        if (data.success) {
            window.open(data.data, "_blank");
        }
    };

    const handleLoginWithGithub = async () => {
        const response = await axios.get(
            "http://localhost:8080/api/v1/oauth/github"
        );
        const data = response.data;

        if (data.success) {
            window.open(data.data, "_blank");
        }
    };

    return (
        <div
            className={cn(
                "flex justify-center items-center gap-5 flex-wrap",
                className
            )}
        >
            <Button
                onClick={handleLoginWithGoogle}
                variant="secondary"
                className="flex-1 space-x-3"
            >
                <span className="w-5 h-5">
                    <img
                        className="w-full h-full object-cover"
                        src="/icons/google.png"
                        alt="google-icon"
                    />
                </span>
                <span>Tiếp tục với google</span>
            </Button>
            <Button
                onClick={handleLoginWithGithub}
                variant="secondary"
                className="flex-1 space-x-3"
            >
                <span className="w-5 h-5">
                    <img
                        className="w-full h-full object-cover"
                        src="/icons/github.png"
                        alt="github-icon"
                    />
                </span>
                <span>Tiếp tục với github</span>
            </Button>
        </div>
    );
};

export default OAuthLogin;
