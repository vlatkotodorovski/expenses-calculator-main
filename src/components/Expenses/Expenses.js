import React from 'react'
import './Expenses.css'
import axios from 'axios'
import moment from 'moment';
// import { NavLink } from 'react-router-dom'


export class Expenses extends React.Component {
    // state = { products: [] }
    constructor(props) {
        super(props);
        this.state = {

            products: [],
            totalSpent: 0

        }
        // this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
        this._renderExpenses = this._renderExpenses.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
        this.filterByMonth = this.filterByMonth.bind(this)
    }

    async componentDidMount() {
        const access_token = await localStorage.getItem('access_token')

        axios.get('http://localhost:3000/expenses', {
            headers: {
                access_token
            }
        }).then(
            (res) => {
                this.setState({ products: res.data, defaultProducts: res.data })
            }
        )
    }

    

    _renderExpenses() {
        console.log(this.state.products)
        return this.state.products.map(product => (
            <tr className="table-row" key={product._id}>
                <td>{product.productName}</td>
                <td>{product.productDescription}</td>
                <td>{product.productType}</td>
                <td>{moment(product.purchaseDate).format('Do MMMM YYYY, h:mm:ss')}</td>
                
                <td>{product.price}</td>
                <td></td>
                {/* <td className="row-actions">
                    <button className="icon-button edit-button"></button>
                    <button className="icon-button delete-button" onClick={this._deleteProduct(product)}></button>
                </td> */}
            </tr>
        ))
    }

    totalPrice() {
        // var sum = 0;
        // for (var i = 1; i <= this.state.products.length; i++) {
        //     // sum = sum + i;
        //     for (var j = 1; j <= this.state.product.price.length; i++){
        //         sum = sum + i;  
        //     }
        // }
        var totalSpent = this.state.products.reduce(function(prev, cur) {
            return prev + cur.price;
          }, 0);
          
          return totalSpent
        //   console.log('Total Spent:', totalSpent); 
    }

    filterByMonth(e){
        const month = e.target.value

        if(month === "all"){
            return this.setState({
                products: this.state.defaultProducts
            })
        }

        const a = this.state.defaultProducts.filter((product) => {
            if(String(moment(product.purchaseDate).month()) === month){
                return true;
            }
            return false;
        })
        this.setState({
            products: a
        })
        console.log(a)
    }

    render() {
        return (
            <section id="expenses">
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
                    <div className="prodText">
                        <h1>Expenses</h1>
                    </div>
                </div>
                <div className="tabs-form">
                    <div className="tabs">
                        <button className="active">MONTHLY</button>
                        <button className="inactive">YEARLY</button>
                    </div>

                    <div className="prod_dropdown exps">
                        <label htmlFor="">Choose Month</label>
                        <form>
                            <select onChange={this.filterByMonth}>
                                <option value="all">ALL</option>
                                <option value="0">January</option>
                                <option value="1">February</option>
                                <option value="2">March</option>
                                <option value="3">April</option>
                                <option value="4">May</option>
                                <option value="5">June</option>
                                <option value="6">July</option>
                                <option value="7">August</option>
                                <option value="8">September</option>
                                <option value="9">October</option>
                                <option value="10">November</option>
                                <option value="11">December</option>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {this._renderExpenses()}
                            {/* <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td></td>
                            </tr>
                        </tbody>
                        <tbody className="table-body">
                            <tr className="table-row">
                                <td>Coca Cola</td>
                                <td>Drink</td>
                                <td>carbonated soft drink</td>
                                <td>29/04/2019</td>
                                <td>75</td>
                                <td></td>
                            </tr> */}
                        </tbody>
                    </table>
                    <div className="fixed-text-price">
                        {/* <p>Total Spent: 1205 den.</p> */}
                        <p>Total Spent: {this.totalPrice()}den.</p>
                    </div>
                </div>
            </section>

        )
    }
}