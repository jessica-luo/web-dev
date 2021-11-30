import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem"
import TodoList from "./Todo/TodoList"
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies"

const Practice = () => {
    return (
        <>
            <h1>Practice</h1>
            <Link to="/a9/hello">
                Hello
            </Link> |
            <Link to="/a9/build">
                Build
            </Link>
            <Movies/>
            <APIExamples/>
            <ReduxExamples/>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice;