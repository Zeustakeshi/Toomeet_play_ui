"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Notifycation from "../notifycation/Notifycation";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useAuth } from "@/contexts/AuthProvider";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

type Props = {
    className?: string;
};

const HeaderAction = ({ className }: Props) => {
    const { user, isLogin, logout } = useAuth();

    return (
        <div className={cn(className)}>
            <Notifycation></Notifycation>
            {isLogin ? (
                <>
                    <Avatar className="w-9 h-9">
                        <AvatarImage src={user?.image}></AvatarImage>
                    </Avatar>
                    <Button onClick={logout}>Đăng xuất</Button>
                </>
            ) : (
                <Link
                    className={cn(buttonVariants({ variant: "default" }))}
                    href="/auth/login"
                >
                    Đăng nhập
                </Link>
            )}
        </div>
    );
};

export default HeaderAction;
