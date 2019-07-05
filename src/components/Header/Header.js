import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class Header extends React.Component {
 

    state = {
        profile: {}
    }
    async componentDidMount() {
        const access_token = await localStorage.getItem('access_token')

        axios.get('http://localhost:3000/profile', {
            headers: {
                access_token
            }
        }).then(
            (res) => {
                this.setState({ profile: res.data })
            }
        )
    }

    render() {
        console.log(this.props.firstname)
        return (
            <div className="headerNewProduct">
                <div className="button">
                    
                    <NavLink to='/products'><button className="button_products" >PRODUCTS</button></NavLink>
                    <NavLink to='/expenses'><button className="button_expenses" >EXPENSES</button></NavLink>
                    
                </div>
                <div className="avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                        alt="avatar" />
                    
                    <p>{this.state.profile.firstname} {this.state.profile.lastname}</p>
                </div>
            </div>
        )
    }
}