import React from 'react'

import moment from 'moment';
import axios from 'axios'



export class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            productName: '',
            productDescription: '',
            productType: '',
            purchaseDate: '',
            price: '',
            product: this.props.location.state.product
        }
        this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this._updateProduct = this._updateProduct.bind(this);
    }

    _updateProduct() {
        const access_token = localStorage.getItem('access_token')
        axios.patch('http://localhost:3000/edit/' + this.state.product._id , this.state.product, {
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
        let newEditProduct = {...this.state.product, [e.target.name]: e.target.value };
        this.setState({
            product: newEditProduct
        })
    }


    render() {
        let product = this.state.product;
        return (
            <section id="new-product">
                <div className="newProduct">
                    

                    <div className="backgroundProduct">
                        <div className="backNewProd">
                            <h1>New Product</h1>
                        </div>
                        <div className="mainProduct">
                            <div className="login-form prod">
                                <div>
                                    <label htmlFor="">Product Name</label>
                                    <input type="text" name="productName" value={product.productName} onChange={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Description</label>
                                    <input type="text" name="productDescription" value={product.productDescription} onChange={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Type</label>
                                    <input type="text" name="productType" value={product.productType} onChange={this.HandleFieldsChange}/>

                                    <label htmlFor="">Purchase Date</label>
                                    <input type="date" name="purchaseDate" value={moment(product.purchaseDate).format('YYYY-MM-DD')} onChange={this.HandleFieldsChange}/>

                                    <label htmlFor="">Product Price</label>
                                    <input type="number" name="price" value={product.price} onChange={this.HandleFieldsChange}/>

                                    <button onClick={this._updateProduct}>UPDATE PRODUCT</button>
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