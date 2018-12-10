import React from "react";
import {Link} from "react-router-dom";

export const MyHomeLink = () => {

    return (
        <Link to={"/"}>
            <button className={"btn_quit"}>Leave</button>
        </Link>
    );
};