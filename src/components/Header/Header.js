import React from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         firstname: this.props.firstname,
    //         lastname: '',
    //         email: '',
    //         dateOfBirth: '',
    //         telephone: '',
    //         country: '',
    //         password: ''

    //     }

    // }

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
                    {/* <button className="button_products" >PRODUCTS</button> */}
                    {/* <button className="button_expenses" >EXPENSES</button> */}
                    <NavLink to='/products'><button className="button_products" >PRODUCTS</button></NavLink>
                    <NavLink to='/expenses'><button className="button_expenses" >EXPENSES</button></NavLink>
                    {/* <button className="button_products" ><NavLink to='/products' className="btn-green">PRODUCTS</NavLink></button>
                    <button className="button_expenses" ><NavLink to='/expenses' className="btn-black">EXPENSES</NavLink></button> */}
                </div>
                <div className="avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                        alt="avatar" />
                    {/* <p>Gal Gadot</p> */}
                    <p>{this.state.profile.firstname} {this.state.profile.lastname}</p>
                </div>
            </div>
        )
    }
}