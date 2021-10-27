import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Route path={["/", "/a6", "/a6/hello"]} exact={true}>
                    <HelloWorld/>
                </Route>
                <Route path="/a6/Practice" exact={true}>
                    <Practice/>
                </Route>
                <Route path="/a6/Build" exact={true}>
                    <Build/>
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;