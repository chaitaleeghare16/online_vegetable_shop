import React, { Component } from 'react'

import './Styles/SignUp.css'
import { BrowserRouter, Route } from 'react-router-dom'

export class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            FirstName: '',
            Address:'',
            Email: '',
            Pincode:'',
            Phone:'',
            City:'',
            Password: '',
            ConfirmPassword: '',
            firstnameError: '',
            AddressError:'',
            CityError:'',
            PincodeError:'',
            PhoneError:'',
            passwordError: '',
            emailError: ''
        }
    }

    validForm = () => {
        var isValid = true
        if (this.state.FirstName.length === 0) {
            this.setState({ firstnameError: "Firstname Should Not Be Blank" });
            isValid = false;
        }
        else if (this.state.FirstName.length > 0) {
            this.setState({ firstnameError: "" });
            isValid = true;
        }

        if (this.state.Address.length === 0) {
            this.setState({ AddressError: "Address Should Not Be Blank" });
            isValid = false;
        }



        if (!this.state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            this.setState({ emailError: "Email should contain . and @" });
            isValid = false;
        }
        else if (this.state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
            this.setState({ emailError: "" });
            isValid = true;
        }


        if (this.state.City.length === 0) {
            this.setState({ CityError: "city Should Not Be Blank" });
            isValid = false;
        }

        if (this.state.Phone.length === 0) {
            this.setState({ PhoneError: "Phone number Should Not Be Blank" });
            isValid = false;
        }

        if (this.state.Phone.length === 0) {
            this.setState({ PincodeError: "Pincode Should Not Be Blank" });
            isValid = false;
        }


        if (!this.state.Password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            this.setState({
                passwordError: `password should conatin atleast 1 capital 1 special 
            character and minimum length of 8` });
            isValid = false;
        } else if (this.state.Password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)) {
            this.setState({ passwordError: "" });
            isValid = true;
        }
        if (this.state.Password != this.state.ConfirmPassword) {
            this.setState({ passwordError: "Password And Confirm Password Not Match" })
            isValid = false;
        } else if (this.state.Password != this.state.ConfirmPassword) {
            this.setState({ passwordError: "" })
            isValid = true;
        }
        return isValid;
    }




    onchange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitData = e => {

        const validForm = this.validForm()
        var allUserDetails = JSON.parse(localStorage.getItem('UsersData'))
         var a=true
        if(allUserDetails!=null){
        allUserDetails.map(user => {
            if (user.Email === this.state.Email) {
                a=false;
            }
        })}
        if (allUserDetails == null) {
            allUserDetails = []

            if (validForm == true) {

                const userDetails = {
                    isAdmin: false,
                    FirstName: this.state.FirstName,
                    Email: this.state.Email,
                    Password: this.state.Password,
                    ConfirmPassword: this.state.ConfirmPassword
                }
                allUserDetails.push(userDetails)
                localStorage.setItem('UsersData', JSON.stringify(allUserDetails))

                alert('data added to localStorage')
                this.props.history.push('/login')
            }
        }
        else if (allUserDetails != null) {
            if (validForm == true) {
                if(a==true){
                const userDetails = {
                    isAdmin: false,
                    FirstName: this.state.FirstName,
                    Email: this.state.Email,
                    Password: this.state.Password,
                    ConfirmPassword: this.state.ConfirmPassword
                }
                allUserDetails.push(userDetails)
                localStorage.setItem('UsersData', JSON.stringify(allUserDetails))

                alert('data added to localStorage')
                this.props.history.push('/login')
                
            }
            else{
                alert('your Email is already register...please sign up with another Email')
            }
            }
            else{
                alert('something is wrong ')
            }
        }


    }

    render() {
        return (
            <div className='container'>
                <form autoComplete='off'>
                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > First name <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='FirstName' value={this.state.FirstName} onChange={this.onchange} placeholder='First Name' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.firstnameError}</pre>
                    </div>
                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Address <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='Address' value={this.state.Address} onChange={this.onchange} placeholder='Address' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.AddressError}</pre>
                    </div>

                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Email <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='Email' value={this.state.Email} onChange={this.onchange} placeholder='Email' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.emailError}</pre>
                    </div>


                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > City <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='City' value={this.state.City} onChange={this.onchange} placeholder='City' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.CityError}</pre>
                    </div>


                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Area Pincode <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='Pincode' value={this.state.Pincode} onChange={this.onchange} placeholder='Pincode' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.PincodeError}</pre>
                    </div>


                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Phone Number<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='Phone' value={this.state.Phone} onChange={this.onchange} placeholder='Phone Number' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.PhoneError}</pre>


                    </div>
                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' >Password <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="password" name='Password' value={this.state.Password} onChange={this.onchange} placeholder='Password' required className='form-control' />
                        <pre style={{ color: 'red' }}> {this.state.passwordError}</pre>

                    </div>

                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > ConfirmPassword<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="password" name='ConfirmPassword' value={this.state.ConfirmPassword} onChange={this.onchange} placeholder='ConfirmPassword' required className='form-control' />


                    </div>

                    <button type='button' className='btn btn-primary m-2' onClick={this.submitData}> Sign up </button>

                </form>


            </div>
        )
    }
}


export default SignUp
