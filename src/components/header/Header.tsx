import Logo from "@/components/ui/logo";
import React from "react";
import Navbar from "./navbar/Navbar";
import MaxWidthWrapper from "@/components/wrapper/MaxWidthWrapper";
import GlobalSearch from "@/components/search/GlobalSearch";
import HeaderAction from "./HeaderAction";

type Props = {};

const Header = (props: Props) => {
    return (
        <header>
            <MaxWidthWrapper className="flex justify-between items-center gap-5 shadow-md py-2">
                <div className="flex justify-start items-center gap-5">
                    <Navbar></Navbar>
                    <Logo></Logo>
                </div>
                <GlobalSearch className="flex-1"></GlobalSearch>
                <HeaderAction className="flex justify-end items-center gap-5"></HeaderAction>
            </MaxWidthWrapper>
        </header>
    );
};

export default Header;
