
import React ,{Component} from 'react';
import { Tab, Tabs,Grid,Cell,Card, CardMenu,CardText,CardTitle, CardActions, Button, IconButton } from 'react-mdl';

 import myresume from './RESUME.pdf';

class About extends Component{
    constructor(props){
        super(props);
        this.state = { activeTab: 0};
    }

toggleCategories(){
    if(this.state.activeTab === 0){
        return(
            <div> 
              
                <Card shadow= {5} style ={{minwith:'400', margin : 'auto'}}>
                    <CardTitle style= {{ color:"#fff", height:'175px',
                    background:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyuBvQO8VQTWNNgfqGkS6yJZFBf8Pb3BDTCg&usqp=CAU)'}}>
                      My RobotFriends
                    </CardTitle>
                    <CardText className ="test-styling" style={{ background:'pink', fontFamily:'arial',color:'black',fontSize:'1em'}}>
                    My name is Falilou Ouro Djobo
                    I'm actively poursuing my goal to become software engineer
                    where my skills I earned in four year college 
                    in computer science major can be utilized. 
                    This is my first portfolio I built as an individual project
                    but I attached this link to download my resume
                    </CardText>
                    <CardActions border>
                    
                        <Button  colored  > 
                        <a  href ='//https://github.com/falilo/myportfolio.git' style ={{textDecoration:'none'}}>
                        github 
                        </a>
                        </Button>
                        
                        <Button  colored>
                            <a href = { myresume} download style={{textDecoration:'none'}}> 
                               Resume 
                            </a> 
                        </Button>
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
                   <Tab>About Me</Tab>
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

export default About;