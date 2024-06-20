import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";

type Props = {
    className?: string;
};

const GlobalSearch = ({ className }: Props) => {
    return (
        <div className="flex justify-center items-center rounded-2xl overflow-hidden border border-slate-300 min-w-[500px]">
            <Input
                placeholder="Tìm kiếm"
                className="!border-none !outline-none !focus:border-none rounded-tr-none rounded-br-none"
            ></Input>
            <Button
                variant="secondary"
                className="hover:bg-slate-300 rounded-none bg-slate-200"
            >
                <SearchIcon size={20}></SearchIcon>
            </Button>
        </div>
    );
};

export default GlobalSearch;
