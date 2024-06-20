import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type AlertType = "success" | "warning" | "error";

type Props = {
    title: string;
    children: ReactNode;
    type?: AlertType;
    className?: string;
};

const getWrapperStyle = (type: AlertType): string => {
    switch (type) {
        case "success":
            return "border-green-500";
        case "error":
            return "border-rose-500";
        case "warning":
            return "border-amber-400";
    }
};
const getTitleStyle = (type: AlertType): string => {
    switch (type) {
        case "success":
            return "text-green-500";
        case "error":
            return "text-rose-500";
        case "warning":
            return "text-amber-400";
    }
};
const getContentStyle = (type: AlertType): string => {
    switch (type) {
        case "success":
            return "";
        case "error":
            return "";
        case "warning":
            return "";
    }
};

const Alert = ({ title, children, type = "success", className }: Props) => {
    return (
        <div
            className={cn(
                "px-4 py-3 rounded-md max-w-full border",
                getWrapperStyle(type),
                className
            )}
        >
            <h5 className={cn("font-semibold mb-3 ", getTitleStyle(type))}>
                {title}
            </h5>
            <div
                className={cn(
                    "text-muted-foreground text-sm",
                    getContentStyle(type)
                )}
            >
                {children}
            </div>
        </div>
    );
};

export default Alert;
