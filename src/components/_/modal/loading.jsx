import { useState } from "react"
import { useContext } from "react";
import { UserContext } from "../../../context/userContext";

const LoadingWidget = () => {
    const { isLoading } = useContext(UserContext);

    return (
        <>
            {isLoading && (
                <>
                    <div className="fixed h-full w-full bg-slate-300 opacity-30 blur-2xl" style={{zIndex: '8'}}></div>
                    <div className="flex text-2xl fixed w-[100%] h-[100%] justify-center items-center" style={{zIndex: '9'}}>
                        <div className=" bg-[url('/src/assets/loaders/preloader.gif')] bg-contain bg-no-repeat h-[200px] w-[200px]"/>
                    </div>
                </>
            )}
        </>
    )
}

export default LoadingWidget