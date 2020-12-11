import React from 'react';
import {Switch, Route, } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Resume from './Resume';
import Project from './Project';
import Contact from './Contact';


const Main = ()=>(
     
        
            <Switch>
                <Route exact path = "/"  component = { Home } />
                <Route   path = "/About"  component = { About } />
                <Route  path = "/Resume"  component= { Resume } />
                <Route  path = "/Project" component = { Project } />
                <Route  path = "/Contact" component = { Contact } />
            </Switch>


        //      <Switch>
        //     <Route path="Home" >
        //             <Home/>
        //     </Route> 
        //     <Route path="About">
        //         <About />
        //     </Route>
        //     <Route path="Resume">
        //         <Resume />
        //     </Route>
        //     <Route path="Project">
        //         <Project />
        //     </Route>
        //     <Route path="Contact">
        //         <Contact />
        //     </Route>
        // </Switch> 
    
    
)
export default Main;
