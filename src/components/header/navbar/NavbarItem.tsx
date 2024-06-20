import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
    to: string;
    icon: ReactNode;
    children: ReactNode;
};

const NavbarItem = ({ children, to, icon }: Props) => {
    return (
        <Link
            href={to}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                "min-w-[200px] flex justify-start items-center gap-2 py-5"
            )}
        >
            <span className="mr-5 text-slate-800">{icon}</span>
            <span>{children}</span>
        </Link>
    );
};

export default NavbarItem;
