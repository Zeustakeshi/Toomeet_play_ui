import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

const MaxWidthWrapper = ({ children, className }: Props) => {
    return <div className={cn("px-5", className)}>{children}</div>;
};

export default MaxWidthWrapper;
