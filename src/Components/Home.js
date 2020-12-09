


import React ,{Component} from 'react';
import { Cell, Grid } from 'react-mdl';


class Home extends Component{
    render(){
        return(
            <div style ={ {width : '100%', margin : 'auto'}}>
                <Grid className = 'content'>
                    <Cell col = {12}>
                        <img 
                         src ='https://cdn0.iconfinder.com/data/icons/avatars-6/500/Avatar_boy_man_people_account_client_male_person_user_work_sport_beard_team_glasses-512.png' />
                         alt = 'avator'
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Home;