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
import { LoginType, loginSchema } from "@/schema/auth.schema";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {};

const LoginForm = (props: Props) => {
    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
    });

    const handleSubmit = async (value: LoginType) => {
        console.log({ value });
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
                <Button className="w-full">Đăng nhập</Button>
            </form>
        </Form>
    );
};

export default LoginForm;
