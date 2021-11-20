import A7 from "./a7";
import A6 from "./a6";
import React from "react";

const History = () => {
    return (
        <div>
            <A6/>
            <A7 />
            <h2>Non React.js Assignments</h2>
            <h3>Assignment 2</h3>
            <ul>
                <li><a href="/a2/practice/index.html">HTML Practice</a></li>
                <li><a href="/a2/twitter/navigation.html">Twitter clone</a></li>
            </ul>
            <h3>Assignment 3</h3>
            <ul>
                <li><a href="/a3/practice/css/index.html">CSS Practice</a></li>
                <li><a href="/a3/twitter/navigation.html">Twitter clone</a></li>
            </ul>
            <h3>Assignment 4</h3>
            <ul>
                <li><a href="/a4/practice/bootstrap/index.html">Bootstrap Practice</a></li>
                <li><a href="/a4/twitter/explore/explore.html">Twitter clone</a></li>
            </ul>
            <h3>Assignment 5</h3>
            <ul>
                <li><a href="/a5/practice/js/index.html">JavaScript & Console Practice</a></li>
                <li><a href="/a5/practice/js/todos/index.html">ToDoList Practice</a></li>
                <li><a href="/a5/twitter/explorescreen/explore.html">Twitter clone</a></li>
            </ul>
        </div>
    )
}

export default History;