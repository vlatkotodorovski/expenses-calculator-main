import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
import axios from 'axios';


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this._doLogin = this._doLogin.bind(this);
    }

    _doLogin() {
        axios.post('http://localhost:3000/login', {
            email: this.state.email,
            password: this.state.password
        }).then(async res => {
            const access_token = res.data.access_token;
            await localStorage.setItem("access_token", access_token);
            this.props.history.push('/products')
        })
            .catch(err => console.log(err))

        // fetch('http://localhost:3000/login', {
        //     method: 'POST',
        //     mode: 'cors',
        //     body: {
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        // }).then(res => console.log(res))
        //     .catch(err => console.log(err))
    }

    HandleFieldsChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <section id="login">
                <div className="center_div">
                    <div className="login-container">
                        <div className="login-form">
                            <label>E-mail</label>
                            <input type="email" name="email" placeholder="" onInput={this.HandleFieldsChange} />

                            <label>Password</label>
                            <input type="password" name="password" placeholder="" onInput={this.HandleFieldsChange} />

                            <button onClick={this._doLogin}>SIGN IN</button>

                        </div>
                        {/* <p>Or if you don't have an account, <a href="register.html">Register.</a></p> */}
                        <p>Or if you don't have an account, <NavLink to="/register"> Register</NavLink></p>
                    </div>
                </div>
            </section>

        )
    }
}