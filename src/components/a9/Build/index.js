import React from "react";
import {Link, Route} from "react-router-dom";
import "./ExploreScreen/explore.css"
import Index from "./ExploreScreen";
import HomeScreen from "./HomeScreen";

import who from "../reducers/who";
import tweets from "../reducers/tweets";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who})
const store = createStore(reducer);


const Build = () => {
    return (
        <Provider store={store}>
            <div>
                <h1>Build</h1>
                <Link to="/a9/hello">
                    Hello
                </Link> |
                <Link to="/a9/practice">
                    Practice
                </Link>
                <Route path={["/", "/a9/Build"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a9/Build/ExploreScreen"
                       exact={true} component={Index}/>
            </div>
        </Provider>
    );
};
export default Build;
