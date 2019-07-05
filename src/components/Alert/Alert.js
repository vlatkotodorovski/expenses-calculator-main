import React from 'react'

export class Alert extends React.Component {


    render() {
        return (
            <div className="alert">
                <div className="white-box">
                    <div>
                        <h2>Delete Product</h2>
                        <p>You are about to delete this product. Are you sure you wish to continue?</p>
                    </div>
                    <div className="alert-btns">
                        <button className="cancel-btn" onClick={this.props.visibleFalse}>CANCEL</button>
                        <button className="del-btn" onClick={this.props._deleteProduct}>DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Alert;