import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header/Header";
import MaxWidthWrapper from "@/components/wrapper/MaxWidthWrapper";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "Toomeet Play",
    description: "Nền tảng video streming trong hệ sinh thái Toomeet",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(roboto.className, "font-normal")}>
                <Header></Header>
                <MaxWidthWrapper className="w-full h-[calc(100svh-56px)]">
                    {children}
                </MaxWidthWrapper>
                <Toaster />
            </body>
        </html>
    );
}
