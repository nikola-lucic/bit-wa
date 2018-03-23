import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Home from './Home'
import About from './About'
import Footer from './partials/Footer';


const App = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/About' component={About} />
            </Switch>
            <Footer />
        </React.Fragment>
    )
}

export default App;
