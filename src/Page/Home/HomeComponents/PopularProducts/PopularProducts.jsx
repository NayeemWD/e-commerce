
import React, { useContext, useState } from 'react';
import SectionHeading from '../../../../Components/SharedComponents/SectionHeading';
import useData from '../../../../Hooks/useData';

import ProductCard from '../../../../Components/SharedComponents/ProductCard';
import { TbCategory } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../../../Context/AuthProvider';
import Swal from 'sweetalert2';

const PopularProducts = () => {
    const { categorys, products } = useData()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categoryId, SetCategoryId] = useState(null)
    const handleCategoryId = (id) => {
        SetCategoryId(id)
    }
    const filterProduct = categoryId ? products.filter(p => p.categoryId == categoryId) : products

    const handleProtectedClick = (e, path) => {
        e.preventDefault();
        if (user) {
            navigate(path);
        } else {
            Swal.fire({
                title: 'Please Login',
                text: 'You need to login to access this feature.',
                icon: 'warning',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 pt-24 '>
            <div className='flex flex-wrap justify-between items-center'>
                <SectionHeading heading={"Popular"} colorHeading={"Products"} discription={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
                <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-4 md:mt-4'>
                    <div>
                        <p onClick={() => handleCategoryId(null)} className={`cursor-pointer ${!categoryId ? 'text-blue-500 font-bold' : ''}`}>All</p>
                    </div>
                    {
                        categorys.map(category => (
                            <div key={category.id}>
                                <p onClick={() => handleCategoryId(category?.id)} className={`cursor-pointer ${categoryId === category.id ? 'text-blue-500 font-bold' : ''}`}>{category?.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mb-4 mt-12'>
                    {filterProduct
                        .sort((a, b) => b.rating - a.rating)
                        .slice(0, 10)
                        .map(product => <ProductCard key={product.id} product={product}></ProductCard>)}
                </div>
            </div>

            <div className='flex justify-center'>
                <Link onClick={(e) => handleProtectedClick(e, '/shop')} to="/shop">
                    <div className='flex cursor-pointer justify-center items-center bgp  py-4 px-8 rounded-md w-full sm:w-auto text-white font-semibold gap-3 '>
                        <p>View All Products</p>
                        <TbCategory />
                    </div>
                </Link>
            </div>
        </div>


    );
};

export default PopularProducts;