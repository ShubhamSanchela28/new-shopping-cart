import React, { useState } from 'react'

function MyCart() {
    const [cartItem, setCartItem] = useState([])
    return (
        <div>
            <h1>Cart Items</h1>
            {cartItem.length === 0 && <div>Cart is Empty</div>}
        </div>
    )
}

export default MyCart
