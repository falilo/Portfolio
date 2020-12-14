// import React , { Components} from 'react'
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import photo from './Components/abdel.jpeg';
import Main from './Components/Main'
// import About from './Components/About';
// import Resume from './Components/Resume';
// import Project from './Components/Project';
// import Contact from './Components/Contact';
// import Home from './Components/Home';


import { Cell, Grid } from 'react-mdl';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Layout>
        <Header  className = 'header' title="Title" scroll>
            <Navigation>
            <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Resume">Resume</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/">Home</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Resume">Resume</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contact">Contact</Link>
            </Navigation>
            
        </Drawer>
        <Content>
            <div className="page-content" />

            <Main/>

            <div className = "cont" style ={ {width : '100%', margin : 'auto'}}>
                <Grid className = 'content'>
                      <Cell col = {10}> 
                      {/* <div id = "photo-container" > */} 
                        <img  id = "photo"
                        //  src ='https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png'
                        //  alt="avator" />

                        src ={photo} alt =''/> 
                          {/* </div> */}
                        <h2>A.Tchakoura</h2>
                    </Cell>
                </Grid>
            </div>
            <div className = 'text-banner'>

                <h1>
                  Full Stack Web Developer
                </h1>
                <hr/>
                <p> HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJs | Express  </p>
                <div className ='Social_Links'>
                    <a  href ='https://github.com/abdel1413' rel = 'noopener noreferrer' >
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
