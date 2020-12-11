// const { Component } = require("react")

import React ,{Component} from 'react';
import { Tab, Tabs,Grid,Cell,Card, CardMenu,CardText,CardTitle, CardActions, Button, IconButton } from 'react-mdl';


class Project extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

toggleCategories(){
    if(this.state.activeTab ===0){
        return(
            <div> 
              
                <Card shadow= {5} style ={{minwith:'500', margin : 'auto'}}>
                    <CardTitle style= {{ color:"#fff", height:'180px',
                    background:'url(https://i.pinimg.com/originals/cd/12/63/cd126300df9112e7cfabc0fc6694037a.jpg)'}}>
                      My RobotFriends
                    </CardTitle>
                    <CardText>
                        this my one of my cool project  so far
                    </CardText>
                    <CardActions border>
                        <Button  colored>
                        <a  href ='https://github.com/abdel1413' style ={{textDecoration:'none'}}  >
                             github 
                             </a>
                             </Button>
                        <Button  colored> 
                        <a  href ='https://github.com/abdel1413/myrobotefriend' style ={{textDecoration:'none'}} >
                        Live Demo 
                        </a>
                        </Button>
                    </CardActions>
                    <CardMenu style ={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
             </div>
        )
    }else if(this.state.activeTab ===1){
        return(
            <div> 
               <Card shadow= {5} style ={{minwith:'500', margin : 'auto'}}>
                    <CardTitle style= {{ color:"#fff", height:'180px',
                    background:'url(https://i.pinimg.com/originals/cd/12/63/cd126300df9112e7cfabc0fc6694037a.jpg)'}}>
                      My RobotFriends
                    </CardTitle>
                    <CardText>
                        this my one of my cool project  so far
                    </CardText>
                    <CardActions border>
                        <Button  colored> github </Button>
                        <Button  colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style ={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
             </div>
        )
    }else if(this.state.activeTab === 2){
        return(
            <div> 
                <Card shadow= {5} style ={{minwith:'500', margin : 'auto'}}>
                    <CardTitle style= {{ color:"#fff", height:'180px',
                    background:'url(https://i.pinimg.com/originals/cd/12/63/cd126300df9112e7cfabc0fc6694037a.jpg)'}}>
                      My RobotFriends
                    </CardTitle>
                    <CardText>
                        this my one of my cool project  so far
                    </CardText>
                    <CardActions border>
                        <Button  colored> github </Button>
                        <Button  colored> Live Demo </Button>
                    </CardActions>
                    <CardMenu style ={{color:'#fff'}}>
                        <IconButton name='share'/>
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

    render(){
        return(
            <div className = 'category_tab'>
               <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab:tabId})} ripple>
                   <Tab>My RobotFriend</Tab>
                   <Tab>Image</Tab>
                   <Tab>Technologies</Tab>
               </Tabs>
               <section>
                   <div className = 'project-grid'>
                       <Grid className = 'project-grid'>
                           <Cell col ={12}>
                               <div className ='proj-content'>
                                   {this.toggleCategories()}
                               </div>

                           </Cell>

                       </Grid>

                   </div>

               </section>

            </div>
        )
    }
}

export default Project;