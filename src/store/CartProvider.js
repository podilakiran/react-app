import React, {useReducer} from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount:0
};

const reducerHandler = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.state.amount;

        return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer( reducerHandler, defaultCartState );

    const addItemToCart = (item) => {
        dispatchCartAction({'type': 'ADD', 'item':item});
    };

    const removeItemFromCart = (id) => {
        dispatchCartAction({'type': 'REMOVE', 'id':id});
    }

    const cartcontext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    };

    return (<CartContext.Provider value={cartcontext}>
        {props.children}
    </CartContext.Provider>)
};

export default CartProvider;