import React, {Component} from "react";
import About from "./About";
import Archive from "./Archive";
import Home from "./Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/archive">Archive</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/about">
                            <About about={'OIJPCR ABOUT PAGE'} />
                        </Route>
                        <Route path="/archive">
                            <Archive archives={'Volume 1'}/>
                        </Route>
                        <Route path="/">
                            <Home props={{welcome: 'Welcome to OIJPCR'}} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
