"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from "@/contexts/AuthProvider";
import api, { isApiError } from "@/lib/api";
import { LoginType, loginSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const LoginForm = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const { saveAuth } = useAuth();
    const { toast } = useToast();
    const router = useRouter();

    const handleSubmit = async (value: LoginType) => {
        try {
            setLoading(true);
            const { data } = await api({
                method: "POST",
                url: "/auth/login",
                data: value,
            });
            saveAuth(data.data);
            router.replace("/");
        } catch (error: any) {
            if (!isApiError(error)) {
                setLoading(false);
                return;
            }
            console.log(error);

            const { code, errors } = error;

            if (code === 1004) {
                if (errors.email) form.setError("email", errors.email);
                if (errors.password) form.setError("password", errors.password);
            } else if (code === 1011) {
                toast({
                    title: "Đăng nhập thất bại",
                    description: "Thông tin đăng nhập không hợp lệ.",
                });
            } else {
                toast({
                    title: "Đăng nhập thất bại",
                    description: "Đã xảy ra lỗi trong quá trình đăng nhập.",
                });
            }
        }
        setLoading(false);
    };

    return (
        <Form {...form}>
            <form
                className="space-y-2"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl {...field}>
                                <Input
                                    type="email"
                                    placeholder="Email đăng nhập"
                                ></Input>
                            </FormControl>
                            <FormMessage></FormMessage>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Mật khẩu</FormLabel>
                            <FormControl {...field}>
                                <Input
                                    type="password"
                                    placeholder="•••••••••••••"
                                ></Input>
                            </FormControl>
                            <FormMessage></FormMessage>
                        </FormItem>
                    )}
                />
                <Button disabled={loading} className="w-full">
                    Đăng nhập
                </Button>
            </form>
        </Form>
    );
};

export default LoginForm;
