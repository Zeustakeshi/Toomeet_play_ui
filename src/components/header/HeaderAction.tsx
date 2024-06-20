import { cn } from "@/lib/utils";
import React from "react";
import Notifycation from "../notifycation/Notifycation";
import { Avatar, AvatarImage } from "../ui/avatar";

type Props = {
    className?: string;
};

const HeaderAction = ({ className }: Props) => {
    return (
        <div className={cn(className)}>
            <Notifycation></Notifycation>
            <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AvatarImage>
            </Avatar>
        </div>
    );
};

export default HeaderAction;
