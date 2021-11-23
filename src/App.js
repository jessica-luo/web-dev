import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a8/HelloWorld";
import Practice from "./components/a8/Practice";
import Build from "./components/a8/Build";
import Practice7 from "./components/a7/Practice/index"
import Build7 from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";
import Build6 from "./components/a6/Build";
import Practice6 from "./components/a6/Practice";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a8", "/a8/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a8/Build">
                    <Build/>
                </Route>

                <Route path={[ "/a7", "/a7/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice7/>
                </Route>
                <Route path="/a7/Build">
                    <Build7/>
                </Route>

                <Route path={[ "/a6", "/a6/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a6", "/a6/practice"]} exact={true}>
                    <Practice6/>
                </Route>
                <Route path="/a6/Build">
                    <Build6/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;