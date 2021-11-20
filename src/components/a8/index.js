import React from "react";
import {Link} from "react-router-dom";

const A8 = () => {
    return (
        <>
            <h2>Assignment 8</h2>
            <Link to="/a8/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/Build">
                Build
            </Link> &nbsp;
        </>
    )
};

export default A8;