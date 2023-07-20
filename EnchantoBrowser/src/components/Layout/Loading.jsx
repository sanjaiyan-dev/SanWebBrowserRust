import { memo } from "react";
import {Skeleton} from "@mui/material"

const SanjaiyanLoading = memo(() => {
    return (
        <>
        <div className="flex flex-col bg-slate-500 min-h-[30vh]"></div>
         <Skeleton></Skeleton>
        </>
    )
});

export default SanjaiyanLoading;
