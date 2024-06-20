import Link from "next/link";
import React, { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
    title?: String;
    to?: string;
    children: ReactNode;
};

const NavbarItemGroup = ({ title, to, children }: Props) => {
    return (
        <div className="px-4 h-full">
            {to && title && (
                <Link
                    href={to}
                    className={cn(
                        buttonVariants({ variant: "ghost" }),
                        "w-full h-full flex flex-row justify-start items-center gap-2 "
                    )}
                >
                    <p className="text-base font-medium ">{title}</p>
                    <p>
                        <ChevronRight className="text-slate-300" />
                    </p>
                </Link>
            )}
            {title && !to && (
                <h3 className="mb-2 text-base font-medium">{title}</h3>
            )}
            <div>{children}</div>
            <Separator className="my-2"></Separator>
        </div>
    );
};

export default NavbarItemGroup;
