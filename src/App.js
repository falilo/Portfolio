// import React , { Components} from 'react'
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';

import About from './Components/About';
import Resume from './Components/Resume';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Home from './Components/Home';

import { Cell, Grid } from 'react-mdl';

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

            <div className = "cont" style ={ {width : '100%', margin : 'auto'}}>
                <Grid className = 'content'>
                    <Cell col = {10}>
                        <img 
                         src ='https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png'
                         alt="avator" />
                        
                    </Cell>
                </Grid>
            </div>
            <div className = 'text-banner'>
                <h1>
                  Full Stack Web Developer
                </h1>
                <hr/>
                <p> HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express | </p>
                <div className ='Social_Links'>
                    <a  href ='http//google.com' rel = 'noopener noreferrer' target = '_blank' >
                      <i className = 'fa fa-github-square' aria-hidden = 'true'/>
                    </a>
                    <a  href ='http//google.com' rel = 'noopener noreferrer' target = '_blank' >
                      <i className = 'fa fa-linkedin-square' aria-hidden = 'true'/>
                    </a>
                    
                    <a  href ='http//google.com' rel = 'noopener noreferrer' target = '_blank' >
                      <i className = 'fa fa-facebook-square' aria-hidden = 'true'/>
                    </a>

                    <a  href ='http//google.com' rel = 'noopener noreferrer' target = '_blank' >
                      <i className = 'fa fa-youtube-square' aria-hidden = 'true'/>
                    </a>

                </div>
            </div>
            
        </Content>
    </Layout>

      </header>
    </div>
  );
}

export default App;
