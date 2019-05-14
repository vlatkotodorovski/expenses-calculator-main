import React from 'react'

export class Alert extends React.Component {
    render() {
        return (
            <div class="alert">
                <div class="white-box">
                    <div>
                        <h2>Delete Product</h2>
                        <p>You are about to delete this product. Are you sure you wish to continue?</p>
                    </div>
                    <div class="alert-btns">
                        <button class="cancel-btn">CANCEL</button>
                        <button class="del-btn">DELETE</button>
                    </div>
                </div>
            </div>
        )
    }
}