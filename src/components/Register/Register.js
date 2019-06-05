import React from 'react'
import './Register.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios'


export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            dateOfBirth: '',
            telephone: '',
            country: '',
            password: ''

        }
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this._doRegister = this._doRegister.bind(this);
    }

    _doRegister() {
        axios.post('http://localhost:3000/register', this.state)
        .then(async res => {
            const access_token = res.data.access_token;
            await localStorage.setItem("access_token", access_token);
            this.props.history.push('/products')
        })
            .catch(err => console.log(err))

    }

    HandleFieldsChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <section id="register">
                <div className="center_div">
                    <div className="login-container margin_top">
                        <div className="login-form">
                            <label htmlFor="">First Name</label>
                            <input type="text" name="firstname" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">Last Name</label>
                            <input type="text" name="lastname" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">E-mail</label>
                            <input type="email" name="email" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">Date Of Birth</label>
                            <input type="date" name="dateOfBirth" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">Telephone</label>
                            <input type="number" name="telephone" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">Country</label>
                            <input type="text" name="country" placeholder="" onInput={this.HandleFieldsChange}/>

                            <label htmlFor="">Password</label>
                            <input type="password" name="password" placeholder="" onInput={this.HandleFieldsChange}/>

                            <button onClick={this._doRegister}>REGISTER</button>
                        </div>
                        {/* <p>Or if you already have an account,
                        <a href="login.html">Sign in.</a>
                    </p> */}
                        <p>Or if you already have an account,
                    <NavLink to="/login"> Sign in</NavLink>
                        </p>
                    </div>
                </div>

            </section>

        )
    }
}