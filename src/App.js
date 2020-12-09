import React , { Components} from 'react'
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';

import About from './Components/About';
import Resume from './Components/Resume';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Layout>
        <Header  className = 'header' title="Title" scroll>
            <Navigation>
                <a href="/Home">Home</a>
                <a href="/About">About</a>
                <a href="/Resume">Resume</a>
                <a href="/Project">Project</a>
                <a href="/Contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/Home" Home = {()=>Home}>Home</a>
                <a href="/About" About = {()=>About}>About</a>
                <a href="/Resume" Resume = {()=>Resume}>Resume</a>
                <a href="/Contact"  Project  = {()=>Project}> Project </a>
                <a href="/Project" Contact = {()=>Contact}>Contact</a>
              
            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />
            {/* <Main/> */}
        </Content>
    </Layout>

      </header>
    </div>
  );
}

export default App;
