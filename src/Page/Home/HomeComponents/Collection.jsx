import React from 'react';
import img01 from "../../../assets/image/12.jpg"
import img02 from "../../../assets/image/13.jpg"
import img03 from "../../../assets/image/14.jpg"
import { Link } from 'react-router';

const Collection = () => {
    return (
        <div>
            <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 flex flex-wrap justify-center gap-8 my-24 '>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{backgroundImage : `url(${img01})`}}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Women's <br /> Collection</h3>
                  <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{backgroundImage : `url(${img02})`}}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Children's <br /> Collection</h3>
                    <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-auto flex-grow px-8 py-8 items-end' style={{backgroundImage : `url(${img03})`}}>
                    <h3 className='text-end text-white text-2xl sm:text-3xl md:text-4xl font-semibold'>Men's <br /> Collection</h3>
                    <Link to="shop"><button className='btn shadow-none bgp'>Shop Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Collection;