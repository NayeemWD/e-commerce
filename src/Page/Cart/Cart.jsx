import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cart = useSelector(state => state.cart.cart);

    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-12'>
            <h1 className='text-2xl font-bold mb-4'>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className='grid grid-cols-1 gap-4'>
                    {cart.map(item => (
                        <div key={item.id} className='flex items-center border-b border-gray-200 py-4'>
                            <img src={item.image} alt={item.name} className='w-24 h-24 object-cover mr-4' />
                            <div className='flex-grow'>
                                <h2 className='font-bold'>{item.name}</h2>
                                <p className='text-gray-500'>{item.categoryName}</p>
                            </div>
                            <div className='text-right'>
                                <p className='font-bold'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
