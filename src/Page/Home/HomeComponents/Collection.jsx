import React, { useContext } from 'react';
import img01 from "../../../assets/image/12.jpg"
import img02 from "../../../assets/image/13.jpg"
import img03 from "../../../assets/image/14.jpg"
import { Link, useNavigate } from 'react-router';
import { AuthContext } from "../../../Context/AuthProvider";
import Swal from "sweetalert2";

const Collection = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

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
        <div>
            <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex flex-wrap justify-center gap-8 my-24 '>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{ backgroundImage: `url(${img01})` }}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Women's <br /> Collection</h3>
                    <Link onClick={(e) => handleProtectedClick(e, '/shop')} to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{ backgroundImage: `url(${img02})` }}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Children's <br /> Collection</h3>
                    <Link onClick={(e) => handleProtectedClick(e, '/shop')} to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{ backgroundImage: `url(${img03})` }}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Men's <br /> Collection</h3>
                    <Link onClick={(e) => handleProtectedClick(e, '/shop')} to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;