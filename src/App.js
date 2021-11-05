import React, {useState} from 'react';

import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {

    const [showcart, setShowCart] = useState(false);
    const showCart = props => {
        setShowCart(true);
    }

    const hideCart = props => {
        setShowCart(false);
    }

    return (
        <CartProvider>
            {showcart && <Cart onHide={hideCart}/>}
            <Header onClick={showCart} />
            <main>
                <Meals/>
            </main>
        </CartProvider>
  );
}

export default App;
