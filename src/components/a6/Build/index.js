import React from "react";
import {Link} from "react-router-dom";
import "./ExploreScreen/explore.css"
import ExploreScreen from "./ExploreScreen/ExploreScreen";

const Build6 = () => {
    return (
        <>
            <h1>Build</h1>
            <Link to="/a6/hello">
                Hello
            </Link> |
            <Link to="/a6/practice">
                Practice
            </Link>
            <ExploreScreen/>
        </>
    )
};
export default Build6;