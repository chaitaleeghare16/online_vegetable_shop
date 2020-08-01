import React, { Component } from 'react'
import onion from './Images/onion.jpeg'
import tomato from './Images/tomato.jpeg'
import potato from './Images/potato.jpeg'


import './Styles/HomePage.css'

export class Home extends Component {
    

       
    

    

    render() {


  
        
        
       return (
           

            <div id='content' style={{textAlign:'left'}}>
               
            
                
        
                <img src={onion} alt="onion" id='onion'></img>
                <span style={{marginLeft:'60px'}}>Onion
                <div style={{marginLeft:'130px',marginTop:'-40px'}}><span>(Rs 19.00 / 1 kg)</span></div></span>
                
                <hr/>

                <img src={tomato} alt="tomato" id='tomato'></img>
                <span style={{marginLeft:'60px'}}>Tomato
                <div style={{marginLeft:'130px',marginTop:'-30px'}}><span>(Rs 20.00/ 1 kg)</span></div></span>
                
                <hr/>

                <img src={potato} alt="potato" id='potato'></img>
                <span style={{marginLeft:'30px'}}>Potato
                <div style={{marginLeft:'125px',marginTop:'-30px'}}><span>(Rs 40.00/ 1 kg)</span></div></span>
                <hr/>
                
            

</div>


        
        )
    }
}

export default Home
