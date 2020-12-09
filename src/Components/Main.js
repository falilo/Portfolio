import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Resume from './Resume';
import Home from './Home';
import Contact from './Contact';
import About from './About';

const Main = ()=>(
    <Switch>
        <Route exact path = "/" component = {Resume} />
        <Route  exact path = "/" component = {About}/>
        <Route exact path = "/" component = {Contact} />
        <Route exact path = "/" component = {Home} />

    </Switch>
)
export default Main;
