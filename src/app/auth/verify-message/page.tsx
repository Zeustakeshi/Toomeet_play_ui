"use client";
import Alert from "@/components/ui/alert";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type Props = {};

const page = (props: Props) => {
    const [email, setEmail] = useState<String>("");
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const email = searchParams.get("email");
        if (!email) router.replace("/auth/login");
        setEmail(email as string);
    }, []);

    const handleResendVerifyEmail = async () => {};

    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-[120px] h-[120px]">
                <img
                    className="w-full h-full object-cover"
                    src="/icons/email.gif"
                    alt="email-image"
                />
            </div>
            <Alert title="Tạo tài khoản thành công" className="max-w-[500px]">
                Chúng tôi đã gửi một liên kết xác thực tài khoản đến địa chỉ{" "}
                {email}. Vui lòng kiểm tra và xác thực tài khoản của bạn
            </Alert>
            <Link
                href="/auth/login"
                className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full mt-8"
                )}
            >
                Đăng nhập ngay
            </Link>
            <p className="text-center w-full">
                Bạn chưa nhận được email?
                <Button
                    onClick={handleResendVerifyEmail}
                    variant="link"
                    className="!px-2"
                >
                    Gửi lại
                </Button>
            </p>
        </div>
    );
};

export default page;
