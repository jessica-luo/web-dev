import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./Todo/TodoItem"
import TodoList from "./Todo/TodoList"
import ReduxExamples from "./ReduxExamples/components";

const Practice7 = () => {
    return (
        <>
            <h1>Practice</h1>
            <Link to="/a7/hello">
                Hello
            </Link> |
            <Link to="/a7/build">
                Build
            </Link>
            <ReduxExamples/>
            <TodoList/>
            <TodoItem/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
        </>
    )
};

export default Practice7;