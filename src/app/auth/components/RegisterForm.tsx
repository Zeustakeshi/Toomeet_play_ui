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
import { toast } from "@/components/ui/use-toast";
import api, { isApiError } from "@/lib/api";
import { RegisterType, createAccoutSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const RegisterForm = (props: Props) => {
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm<RegisterType>({
        resolver: zodResolver(createAccoutSchema),
    });
    const router = useRouter();

    const handleSubmit = async (value: RegisterType) => {
        try {
            await api({
                method: "POST",
                url: "/auth/register",
                data: {
                    email: value.email,
                    password: value.password,
                    fullName: value.name,
                },
            });

            router.push("/auth/verify-message?email=" + value.email);
        } catch (error: any) {
            if (isApiError(error)) {
                if (error.code === 1004) {
                    const { password, email, fullName } = error.errors;
                    if (password)
                        form.setError("password", {
                            message: password,
                        });
                    if (email) form.setError("email", { message: email });
                    if (fullName) form.setError("name", { message: fullName });
                } else if (error.code === 1002) {
                    toast({
                        title: "Tạo tài khoản thất bại",
                        description: "Địa chỉ email đã tồn tại trên hệ thống.",
                    });
                } else {
                    toast({
                        title: "Tạo tài khoản thất bại",
                        description:
                            "Đã có lỗi xảy ra trong quá trình tạo tài khoản.",
                    });
                }
            }
        }
    };

    return (
        <Form {...form}>
            <form
                className="space-y-2 max-w-[500px]"
                onSubmit={form.handleSubmit(handleSubmit)}
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Tên người dùng</FormLabel>
                            <FormControl {...field}>
                                <Input placeholder="Ví dụ: Minh Hiếu"></Input>
                            </FormControl>
                            <FormMessage></FormMessage>
                        </FormItem>
                    )}
                />
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nhập lại mật khẩu</FormLabel>
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
                <Button className="w-full" disabled={loading}>
                    Tạo tài khoản
                </Button>
            </form>
        </Form>
    );
};

export default RegisterForm;
