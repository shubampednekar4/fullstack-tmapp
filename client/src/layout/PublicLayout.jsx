import React from "react";
import { Outlet } from "react-router-dom";
const PublicLayout = () => {
    return (
        <>
        <h1>
          Header  
        </h1>
            <Outlet/>
            <h6>Footer</h6>
        </>
    )
}

export default PublicLayout;