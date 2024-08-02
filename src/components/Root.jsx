import React from "react";
import Navigation from "./Navigation"
import {Outlet} from 'react-router-dom';


function Root(){

    
    return (
        <>

        <Navigation/>
        <main>
            <Outlet/>
        </main>
        </>
    )
}

export default Root;
