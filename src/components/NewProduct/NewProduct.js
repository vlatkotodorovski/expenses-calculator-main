import React from 'react'
import './NewProduct.css'
import axios from 'axios'
// import { NavLink } from 'react-router-dom'


export class NewProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productDescription: '',
            productType: '',
            purchaseDate: '',
            price: ''

        }
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this._addNewProduct = this._addNewProduct.bind(this);
    }

    _addNewProduct() {
        const access_token = localStorage.getItem('access_token')
        axios.post('http://localhost:3000/new-product', this.state, {
            headers: {
                access_token
            }
        })
        .then( res => {
            
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
            <section id="new-product">
                <div className="newProduct">
                    {/* <div className="headerNewProduct">
                        <div className="button" >
                            <button className="button_products">PRODUCTS</button>
                            <button className="button_expenses">EXPENSES</button>
                        </div>


                        <div className="avatar">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg" alt="avatar" />
                            <p>Gal Gadot</p>
                        </div>
                    </div> */}

                    <div className="backgroundProduct">
                        <div className="backNewProd">
                            <h1>New Product</h1>
                        </div>
                        <div className="mainProduct">
                            <div className="login-form prod">
                                <div>
                                    <label htmlFor="">Product Name</label>
                                    <input type="text" name="productName" placeholder="" onInput={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Description</label>
                                    <input type="text" name="productDescription" placeholder="" onInput={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Type</label>
                                    <input type="text" name="productType" placeholder="" onInput={this.HandleFieldsChange}/>

                                    <label htmlFor="">Purchase Date</label>
                                    <input type="number" name="purchaseDate" placeholder="" onInput={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Price</label>
                                    <input type="number" name="price" placeholder="" onInput={this.HandleFieldsChange}/>

                                    <button onClick={this._addNewProduct}>CREATE PRODUCT</button>
                                </div>

                            </div>

                            <div className="createNewProduct">

                                <div className="new-p">
                                    <p className="button-plus"><i className="fas fa-plus-circle"></i></p>
                                    <p className="newProdText">You are creating a new product</p>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>

        )
    }
}