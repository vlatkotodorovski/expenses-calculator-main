import React from 'react'
import './Products.css'
import '../../assets/images/edit.svg'
import '../../assets/images/trash-alt.svg'
import axios from 'axios';
import { Alert } from '../Alert/Alert'
import moment from 'moment';




export class Products extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

            products: [],
            visible: false,
            selectedProduct: {}


        }
        
        this.onNavigateNewProduct = this.onNavigateNewProduct.bind(this);
        this.onNavigateNewCalc = this.onNavigateNewCalc.bind(this);
        
        this.visibleFalse = this.visibleFalse.bind(this)
        
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
                this.setState({ products: res.data, visible: false })
            }
        )

        console.log("make request to backend to delete product, and backend should return all products without the deleted, after that use setState", product)
    }



    _NavigateEditProduct = (product) => () => {
        console.log('edit product', product)
        this.props.history.push('/edit', { product });
    }

    

    _renderProducts() {
        console.log(this.state.products)
        return this.state.products.map(product => (
            <tr className="table-row" key={product._id}>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>{product.productType}</td>
                <td>{moment(product.purchaseDate).format('Do MMMM YYYY')}</td>
                
                <td>{product.price}</td>
                <td className="row-actions">
                    <button className="icon-button edit-button" onClick={this._NavigateEditProduct(product)}></button>
                    
                    <button className="icon-button delete-button" onClick={() => {
                        this.setState({
                            visible: true,
                            selectedProduct: product
                        });
                    }}></button>
                </td>
            </tr>
        ))
    }

    onNavigateNewProduct() {
        this.props.history.push('/new-product')
    }

    onNavigateNewCalc() {
        this.props.history.push('/expenses')
    }

    visibleFalse() {
        this.setState({
            visible: false
        })
    }

    _filterProducts(e) {
        const type = e.target.value;
        const products = this.state.products;

        if (type === 'lowest_price') {
            this.setState({
                products: products.sort((a, b) => {
                    if (a.price <= b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }

        if (type === 'highest_price') {
            this.setState({
                products: products.sort((a, b) => {
                    if (a.price >= b.price) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }

        
        if (type === 'latest_purchase') {
            this.setState({
                products: products.sort((a, b) => {
                    if (a.purchaseDate >= b.purchaseDate) {
                        return -1;
                    } else {
                        return 1;
                    }
                })
            })
        }
    }


    render() {
        return (
            <section id="products">
               
                <div className="prodText_dropdown">
                    <div>
                        <h1>Products</h1>
                    </div>
                    <div className="prod_dropdown">
                        <label htmlFor="">Filter by:</label>
                        <form>
                            <select onChange={this._filterProducts.bind(this)}>
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
                            
                        </tbody>
                    </table>

                </div>
                <div className="products-buttons">
                    <button className="product-button-green" onClick={this.onNavigateNewCalc}>NEW CALCULATION</button>
                    <button className="product-button-grey" onClick={this.onNavigateNewProduct}>NEW PRODUCT</button>
                </div>

                <div>
                    {this.state.visible ?
                        <Alert visibleFalse={this.visibleFalse} _deleteProduct={this._deleteProduct(this.state.selectedProduct)} />
                        : null}

                </div>


            </section>


        )
    }
}