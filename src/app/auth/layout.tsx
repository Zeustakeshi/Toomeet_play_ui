import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const layout = ({ children }: Props) => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="shadow-2xl min-w-[500px] min-h-[500px]  rounded-md p-5">
                {children}
            </div>
        </div>
    );
};

export default layout;
