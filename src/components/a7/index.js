import React from "react";
import {Link} from "react-router-dom";

const A7 = () => {
    return (
        <>
            <h2>Assignment 7</h2>
            <Link to="/a7/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a7/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a7/Build">
                Build
            </Link> &nbsp;
        </>
    )
};

export default A7;