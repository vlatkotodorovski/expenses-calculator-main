import React from 'react'

export class Alert extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //         products: [],
    //         visable: false
            

    //     }
    //     // this.HandleFieldsChange = this.HandleFieldsChange.bind(this);
    //     // this._renderExpenses = this._renderExpenses.bind(this);
    //     // this.onNavigateNewProduct = this.onNavigateNewProduct.bind(this);
    //     // this.onNavigateNewCalc = this.onNavigateNewCalc.bind(this);
    //     // this._NavigateEditProduct = this._NavigateEditProduct.bind(this);
    // }

    render() {
        return (
            <div className="alert">
                <div className="white-box">
                    <div>
                        <h2>Delete Product</h2>
                        <p>You are about to delete this product. Are you sure you wish to continue?</p>
                    </div>
                    <div className="alert-btns">
                        {/* <button className="cancel-btn">CANCEL</button> */}
                        {/* <button className="del-btn">DELETE</button> */}
                        <button className="cancel-btn" onClick={this.props.visibleFalse}>CANCEL</button>
                        <button className="del-btn" onClick={this.props._deleteProduct}>DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert;