import React from "react";
import {MyHomeLink} from "./my_home_link";

export const NotFound = () =>{

    return(
        <div className={"container"}>
            <h2>NOT FOUND: 404</h2>
            <p>
                ERROR: the page you requested in not available.
            </p>
            <MyHomeLink/>
        </div>
    );

};