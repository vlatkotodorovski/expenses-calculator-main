import React from 'react'
import { NavLink } from 'react-router-dom'

export class Header extends React.Component {
    // constructor(props) {
    //     super(props);
    
    //     // this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
    //     // this._renderExpenses = this._renderExpenses.bind(this);
    //     this.onNavigateProducts = this.onNavigateProducts.bind(this);
    //     this.onNavigateExpenses = this.onNavigateExpenses.bind(this);
    // }

    // onNavigateProducts(){
    //     this.props.history.push('/products')
    //     console.log(this.props)
    // }

    // onNavigateExpenses(){
    //     this.props.history.push('/expenses')
    // }

    render() {
        return (
            <div className="headerNewProduct">
                <div className="button">
                    {/* <button className="button_products" >PRODUCTS</button> */}
                    {/* <button className="button_expenses" >EXPENSES</button> */}
                    <button className="button_expenses" ><NavLink to='/products' className="btn-green">PRODUCTS</NavLink></button>
                    <button className="button_expenses" ><NavLink to='/expenses' className="btn-black">EXPENSES</NavLink></button>
                </div>
                <div className="avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                        alt="avatar" />
                    <p>Gal Gadot</p>
                </div>
            </div>
        )
    }
}