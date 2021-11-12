import { useContext } from 'react';

import MealItemForm from './MealItemFrom';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

import img from '../../../assets/1.jpeg';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            restaurant: props.restaurant,
            web: props.web,
            amount: amount,
            price: props.price
        });
    };

    return (

/*
        <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
*/
        <div className="card mb-3 col-10 mx-auto">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={img} className="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p className="card-text">{props.restaurant}</p>
                        <p className="card-text">{props.web}</p>
                        <p className="card-text">
                            <small className="text-muted">{price}</small>
                        </p>
                        <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
                    </div>
                </div>
            </div>
        </div>
/*
           <div className="col-md-3 col-10 mx-auto">
               <div className="card">
                   <img src={img} className="card-img-top" alt="" />
                   <div className="card-body" >
                       <h5 className="card-title">{props.name}</h5>
                       <p className="card-text">{props.description}</p>
                       <p className="card-text">{price}</p>
                       <div><MealItemForm id={props.id} onAddToCart={addToCartHandler} /></div>
                   </div>
               </div>
           </div>
*/

    );
};

export default MealItem;