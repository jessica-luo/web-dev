import React from "react";
import {Link} from "react-router-dom";

const A6 = () => {
    return (
        <>
            <h2>Assignment 6</h2>
            <Link to="/a6/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a6/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a6/Build">
                Build
            </Link> &nbsp;
        </>
    )
};

export default A6;