// import React , { Components} from 'react'
import './App.css';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import photo from './Components/FOD.jpg';
import Main from './Components/Main';
import anim from './Components/cool_animations-gif_for_you2.gif';



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

                        src ={photo} alt =''/> 
                          {/* </div> */}
                        <h3>Falilou.OuroDjobo</h3>
                    </Cell>
                </Grid>
            </div>
            <div className = 'text-banner'>

                <h1>
                  Full Stack Web Developer
                </h1>
                <hr/>
                <p> HTML/CSS | JavaScript | React | React Router | Python| Java  </p>
                <div className ='Social_Links'>
                    <a  href ='//https://github.com/falilo' rel = 'noopener noreferrer' >
                      <i className = 'fa fa-github-square' aria-hidden = 'true'/>
                      <div className='anim'>
                          <img src={anim} alt="" />
                       </div>
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
