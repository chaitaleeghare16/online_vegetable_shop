import React, { Component } from 'react'
import './Styles/LogIn.css'
import { Link, BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import SignUp from './SignUp'
import HomePage from './HomePage'

export class LogIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      username:'',
      password:'',
      allUsersDetails:[],
      error:{
        usernameerror:'',
        passworderror:''
      }

       
    }
  }
  
  verifyUser=()=>
  {
     
    
    const username = this.state.username;
    const password = this.state.password;
    const userdetail = this.state.allUsersDetails;
    
    var flag=0
   for(var user of userdetail)
   {

   if( username === user.Email && password === user.Password) 
   {
      flag=1
   }
  
   }
   if(flag==1)
   {
   
    this.props.history.push('/')
   }
   else{
 
    this.props.history.push('/login')

   }
     
  
    

  }
  componentDidMount=()=>
  {
      this.setState({
        allUsersDetails:JSON.parse(localStorage.getItem("UsersData"))
      })

     
  }
  validLoginForm=()=>
  {
    // alert(this.state.username+"*")
    // if(this.state.username.length == 0 && this.state.password.length == 0)
    // {
    //     this.setState({error:{usernameerror:'username should not be empty'},
    //     error:{passworderror:'password should not be empty'}
    //   })
    //     // alert(this.state.error.usernameerror)
    // }
     if(this.state.username.length == 0)
    {
      this.setState({error:{usernameerror:'uername should not be empty'}})
        // alert(this.state.error.passworderror)
    }
     else if(this.state.password.length == 0)
    {
      this.setState({error:{passworderror:'password should not be empty'}})
        // alert(this.state.error.passworderror)
    }
    
    
    else{
      alert('logindetails are wrong')
    }

    this.verifyUser();


    
  }

  OnChange=(e)=>
  {
      this.setState({
        [e.target.name] : e.target.value
      })

      
  }

    render() {
        return (
            <div>
                <form a style={{maxWidth:'500px',margin:'auto',marginTop:'150px'}}>
  
                <span class="input-container">
                  <i class="fa fa-user icon"></i>
                  <input class="input-field" type="text" placeholder="Username" autoComplete="off" name="username" value={this.state.username} onChange={this.OnChange}/>
                  </span>
                <pre  style={{ color: 'red' }}>{this.state.error.usernameerror}</pre>

  
  
                <span class="input-container">
                  <i class="fa fa-key icon"></i>
                  <input class="input-field" type="password" placeholder="Password" autoComplete="off" value={this.state.password} name="password" onChange={this.OnChange}/>
                 
                </span>
                <pre  style={{ color: 'red' }}>{this.state.error.passworderror}</pre>

                <button type="button" className='btn btn-primary' onClick={this.validLoginForm}>LogIn</button>
               
                
                
               




  

 
  
  
  

</form>
            </div>
        )
    }
}

export default LogIn
