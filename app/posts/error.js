"use client" ;

import {useEffect} from "react";

export const Error = ({error, reset}) => {
    useEffect(()=>{
        console.error(error);
    }, [error]);


    return (
        <div>
            <h2>Something Went Wrong!</h2>
            <button onClick={()=> reset()}>
                Try Again
            </button>
        </div>
    )
}