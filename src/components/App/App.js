import React from 'react'
import { Route } from 'react-router-dom'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { Portal } from '../Portal/Portal'
import './App.css'

export class App extends React.Component {
    async componentDidMount() {
        const access_token = await localStorage.getItem("access_token");


        if (!access_token && this.props.location.pathname !== '/register') {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <main id="app">
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Portal />

            </main>

        )
    }
}