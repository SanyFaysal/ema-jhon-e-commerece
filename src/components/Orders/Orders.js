import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products);
    const handleRemoveProduct = (productId) => {
        const newCart = cart.filter(product => product.id !== productId);
        setCart(newCart)
        removeFromDb(productId)
    }
    return (
        <div>
            <div className='shop-container'>
                <div className='review-items-container'>
                    {
                        cart.map(product => <ReviewItem
                            key={product.id}
                            product={product}
                            handleRemoveProduct={handleRemoveProduct}
                        ></ReviewItem>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}>
                        <Link to='/inventory'>
                            <button>Next</button>
                        </Link>
                    </Cart>
                </div>

            </div>
        </div>
    );
};

export default Orders;