import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import OAuthLogin from "../components/OAuthLogin";
import RegisterForm from "../components/RegisterForm";

type Props = {};

const page = (props: Props) => {
    return (
        <div className="w-full h-full space-y-2">
            <h1 className="text-2xl font-semibold text-center">
                Tạo tài khoản
            </h1>
            <p className="text-center text-sm text-muted-foreground max-w-[80%] mx-auto">
                Tạo tài khoản để được đề xuất video dành riêng cho bạn
            </p>

            <RegisterForm></RegisterForm>

            <div className="flex justify-center items-center gap-2 text-muted-foreground max-w-[80%] overflow-hidden mx-auto">
                <Separator></Separator>
                <span>hoặc</span>
                <Separator></Separator>
            </div>
            <OAuthLogin className="!my-2"></OAuthLogin>

            <div className="text-center text-sm">
                <p className="text-muted-foreground">Bạn đã có tài khoản ? </p>
                <Link
                    className={cn(buttonVariants({ variant: "link" }))}
                    href="/auth/login"
                >
                    Đăng nhập ngay
                </Link>
            </div>
        </div>
    );
};

export default page;
