import React from "react";
import LoginForm from "../components/LoginForm";
import OAuthLogin from "../components/OAuthLogin";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

type Props = {};

const page = (props: Props) => {
    return (
        <div className="w-full h-full space-y-2">
            <h1 className="text-2xl font-semibold text-center">Đăng nhập</h1>
            <p className="text-center text-sm text-muted-foreground max-w-[80%] mx-auto">
                Đăng nhập để tận hưởng những tính năng tuyệt vời dành riêng cho
                bạn
            </p>

            <LoginForm></LoginForm>

            <div className="flex justify-center items-center gap-2 text-muted-foreground max-w-[80%] overflow-hidden mx-auto">
                <Separator></Separator>
                <span>hoặc</span>
                <Separator></Separator>
            </div>
            <OAuthLogin className="!my-2"></OAuthLogin>

            <div className="text-center text-sm">
                <p className="text-muted-foreground">
                    Bạn chưa có tài khoản ?{" "}
                </p>
                <Link
                    className={cn(buttonVariants({ variant: "link" }))}
                    href="/auth/register"
                >
                    Tạo tài khoản
                </Link>
            </div>
        </div>
    );
};

export default page;
