import React from "react";
import About from ".//components/About";
import Archive from ".//components/Archive";
import Home from ".//components/Home";
import { Container } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

const App = ()=> {
    
        return (
            <Container fluid>
                <NavigationBar/>
                <Home/>
            </Container>
        )
    
}

export default App;
