import React from 'react';
import logo from '../../../assets/image/logo.png'
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';

const MinHeader = () => {
    const cart = useSelector(state => state.cart.cart);

    return (
        <div >
            <div className='flex flex-wrap items-center py-2 justify-between container  mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
                <img className='w-16 md:w-22' src={logo} alt="" />
                <div className='w-full md:w-auto order-3 md:order-2 mt-4 md:mt-0'>
                    <label className="input w-full">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className='w-full lg:w-100' required placeholder="Search . . ." />
                    </label>
                </div>
                <div className='flex gap-5 order-2 md:order-3'>
                    <div className='flex items-center gap-1'>

                        <CiUser className='text-3xl' />
                        <div className='hidden md:block'>
                            <p className='ct text-xs'>Account</p>
                            <div className="flex gap-2">
                               <Link to="/login" className='ts'>LOGIN</Link>
                               <p className="ts">/</p>
                               <Link to="/register" className='ts'>REGISTER</Link>
                            </div>
                        </div>
                    </div>
                    <Link to="/cart" className='flex items-center gap-1 relative'>
                        <CiShoppingCart className='text-3xl' />
                        {cart.length > 0 && <span className='absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>{cart.length}</span>}
                        <div className='hidden md:block'>
                            <p className='ct text-xs'>Cart</p>
                            <p className='ts'>LOGIN</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MinHeader;