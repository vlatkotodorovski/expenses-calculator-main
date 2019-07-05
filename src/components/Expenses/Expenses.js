import React from 'react'
import './Expenses.css'
import axios from 'axios'
import moment from 'moment';



export class Expenses extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {

            products: [],
            totalSpent: 0,
            selectedTime: "monthly"

        }
        
        this._renderExpenses = this._renderExpenses.bind(this);
        this.totalPrice = this.totalPrice.bind(this);
        this.filterByMonth = this.filterByMonth.bind(this);
        this.filterByYear = this.filterByYear.bind(this);
        this.setMonthly = this.setMonthly.bind(this);
        this.setYearly = this.setYearly.bind(this)
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
                <td>{moment(product.purchaseDate).format('Do MMMM YYYY')}</td>

                <td>{product.price}</td>
                <td></td>
                
            </tr>
        ))
    }

    totalPrice() {
        var sum = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            sum = sum + this.state.products[i].price;
        }
        return sum;
        // var totalSpent = this.state.products.reduce(function (prev, cur) {
        //     return prev + cur.price;
        // }, 0);

        // return totalSpent
        //   console.log('Total Spent:', totalSpent); 
    }

    filterByMonth(e) {
        const month = e.target.value

        if (month === "all") {
            return this.setState({
                products: this.state.defaultProducts
            })
        }

        const a = this.state.defaultProducts.filter((product) => {
            if (String(moment(product.purchaseDate).month()) === month) {
                return true;
            }
            return false;
        })
        this.setState({
            products: a
        })
        console.log(a)
    }

    filterByYear(e) {
        const year = e.target.value

        if (year === "all") {
            return this.setState({
                products: this.state.defaultProducts
            })
        }

        const b = this.state.defaultProducts.filter((product) => {
            if (String(moment(product.purchaseDate).year()) === year) {
                return true;
            }
            return false;
        })
        this.setState({
            products: b
        })
        console.log(b)
    }

  

    setMonthly(){
        this.setState({
            selectedTime: "monthly"
        })
    }

    setYearly(){
        this.setState({
            selectedTime: "yearly"
        })
    }


    render() {
        console.log(this.state.selectedTime)
        return (
            <section id="expenses">
               
                <div className="prodText_dropdown">
                    <div className="prodText">
                        <h1>Expenses</h1>
                    </div>
                </div>
                <div className="tabs-form">
                    <div className="tabs">
                        
                        <button className={(this.state.selectedTime === "monthly") ? "active" : "inactive"} onClick={this.setMonthly}>MONTHLY</button>
                        <button className={(this.state.selectedTime === "monthly") ? "inactive" : "active"} onClick={this.setYearly} >YEARLY</button>

                    </div>
                    

                    <div>
                        {
                            this.state.selectedTime === "monthly" ?

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
                        :
                        <div className="prod_dropdown exps">
                            <label htmlFor="">Choose Year</label>
                            <form>
                                <select onChange={this.filterByYear}>
                                    <option value="all">ALL</option>
                                    <option value="1970">1970</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>          
                                </select>
                            </form>
                        </div>
                        }
                    
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
                            
                        </tbody>
                    </table>
                    <div className="fixed-text-price">
                        
                        <p>Total Spent: {this.totalPrice()}den.</p>
                    </div>
                </div>
            </section>

        )
    }
}