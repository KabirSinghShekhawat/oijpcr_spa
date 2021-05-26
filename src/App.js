import React from "react";
import About from ".//components/About";
import Archive from ".//components/Archive";
import Home from ".//components/Home";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = ()=> {
    
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

export default App;
