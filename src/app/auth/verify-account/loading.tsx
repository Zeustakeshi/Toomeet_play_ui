import React from "react";

type Props = {};

const loading = (props: Props) => {
    return (
        <div className="w-full min-h-[500px] flex justify-center items-center flex-col">
            <p className="mb-10">Đang kiểm tra thông tin chờ xíu nhé</p>
            <span className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin rounded-full"></span>
        </div>
    );
};

export default loading;
