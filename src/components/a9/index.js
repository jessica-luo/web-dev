import React from "react";
import {Link} from "react-router-dom";

const A9 = () => {
    return (
        <>
            <h2>Assignment 9</h2>
            <Link to="/a9/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a9/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a9/Build">
                Build
            </Link> &nbsp;
        </>
    )
};

export default A9;