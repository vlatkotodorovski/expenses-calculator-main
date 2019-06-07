import React from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
    

    render() {
        console.log(this.props)
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
                    <p>{this.props.firstname}</p>           
                </div>
            </div>
        )
    }
}