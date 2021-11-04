import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a7/HelloWorld";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a7", "/a7/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path={["/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a7/Build">
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;