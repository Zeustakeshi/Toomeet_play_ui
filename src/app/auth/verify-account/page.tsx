import Alert from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { cn, sleep } from "@/lib/utils";
import axios from "axios";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";

type Props = {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
};

const page = async ({ params, searchParams }: Props) => {
    const code = searchParams?.code;

    if (!code) redirect("/auth/login?error=invalid_validation_code");
    let isRedirect = false;
    try {
        console.log(`url = ${process.env.NEXT_SERVER_URL}/auth/verify-account`);
        await axios({
            method: "GET",
            url: `${process.env.NEXT_SERVER_URL}/auth/verify-account`,
            params: {
                code,
            },
        });

        isRedirect = true;
    } catch (error: any) {
        console.log(error?.response?.data);
        console.log("veirify_account_error");
    }

    if (isRedirect) {
        redirect("/auth/login?success_message=veirify_account_succeess");
    }

    return (
        <div className="min-h-[200px] flex flex-col justify-center items-center">
            <h1 className="w-full text-2xl mb-10">Error: </h1>
            <Alert type="error" title="Xác thực tài khoản thất bại">
                Đã có lỗi xảy ra trong quá trình xác thực vui lòng thử lại sau
            </Alert>
            <div className="text-center text-sm mt-10">
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
