import React from 'react';
import classes from './Cart.model.css';
import Model from "../UI/Model";

const Cart = props => {
    const cartItems = <ul className={classes.cartItems}>{[
        {id: 'c1', name:"Sushi", amount:2, price:12.99},
        ].map((item) => <li>{item.name}</li>)}</ul>;

    return <Model onHide={props.onHide}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes.buttonAlt} onClick={props.onHide}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Model>
}



export default Cart;