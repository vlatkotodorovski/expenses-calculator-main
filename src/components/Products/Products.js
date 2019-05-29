import React from 'react'
import './Products.css'
import '../../assets/images/edit.svg'
import '../../assets/images/trash-alt.svg'
import axios from 'axios';
// import { NavLink } from 'react-router-dom'


export class Products extends React.Component {
    // state = { products: [] }
    constructor(props) {
        super(props);
        this.state = {

            products: [],
            

        }
        // this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        // this._renderExpenses = this._renderExpenses.bind(this);
        this.onNavigateNewProduct = this.onNavigateNewProduct.bind(this);
        this.onNavigateNewCalc = this.onNavigateNewCalc.bind(this);
    }

    async componentDidMount() {
        const access_token = await localStorage.getItem('access_token')

        axios.get('http://localhost:3000/products', {
            headers: {
                access_token
            }
        }).then(
            (res) => {
                this.setState({ products: res.data })
            }
        )
    }

    _deleteProduct = product => () => {
        
        const access_token = localStorage.getItem('access_token')

        axios.delete('http://localhost:3000/products/' + product._id, {
            headers: {
                access_token
            }
        }).then(
            (res) => {
                this.setState({ products: res.data })
            }
        )

        console.log("make request to backend to delete product, and backend should return all products without the deleted, after that use setState", product)
    }

    _renderProducts() {
        console.log(this.state.products)
        return this.state.products.map(product => (
            <tr className="table-row" key={product._id}>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>{product.productType}</td>
                <td>{product.purchaseDate}</td>
                <td>{product.price}</td>
                <td className="row-actions">
                    <button className="icon-button edit-button"></button>
                    <button className="icon-button delete-button" onClick={this._deleteProduct(product)}></button>
                </td>
            </tr>
        ))
    }

    onNavigateNewProduct(){
        this.props.history.push('/new-product')
    }

    onNavigateNewCalc(){
        this.props.history.push('/expenses')
    }


    render() {
        return (
            <section id="products">
                {/* <div className="headerNewProduct">
                    <div className="button">
                        <button className="button_products">PRODUCTS</button>
                        <button className="button_expenses">EXPENSES</button>
                    </div>
                    <div className="avatar">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Gal_Gadot_%2836165097896%29_%28cropped%29.jpg/900px-Gal_Gadot_%2836165097896%29_%28cropped%29.jpg"
                            alt="avatar" />
                        <p>Gal Gadot</p>
                    </div>
                </div> */}
                <div className="prodText_dropdown">
                    <div>
                        <h1>Products</h1>
                    </div>
                    <div className="prod_dropdown">
                        <label htmlFor="">Filter by:</label>
                        <form>
                            <select>
                                <option value="year">Year</option>
                                <option value="highest_price">Highest Price</option>
                                <option value="lowest_price">Lowest Price</option>
                                <option value="latest_purchase">Latest Purchases</option>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="table-container">
                    <table className="table">
                        <thead className="table-header">
                            <tr>
                                <th>Product Name</th>
                                <th>Product Type</th>
                                <th>Product Descrtiption</th>
                                <th>Purchase Date</th>
                                <th>Product Price</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {this._renderProducts()}
                            {/* <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td className="row-actions">
                                    <button className="icon-button edit-button"></button>
                                    <button className="icon-button delete-button"></button>
                                </td>
                            </tr>
                            <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td className="row-actions"><i className="far fa-edit"></i> <i className="far fa-trash-alt"></i></td>
                            </tr>
                            <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td className="row-actions"><i className="far fa-edit"></i> <i className="far fa-trash-alt"></i></td>
                            </tr> */}
                        </tbody>
                    </table>

                </div>
                <div className="products-buttons">
                    <button className="product-button-green" onClick={this.onNavigateNewCalc}>NEW CALCULATION</button>
                    <button className="product-button-grey" onClick={this.onNavigateNewProduct}>NEW PRODUCT</button>
                </div>

            </section>

        )
    }
}