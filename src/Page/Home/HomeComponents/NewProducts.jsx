import React from 'react';
import SectionHeading from '../../../Components/SharedComponents/SectionHeading';
import useData from '../../../Hooks/useData';
import ProductCard from '../../../Components/SharedComponents/ProductCard';
const NewProducts = () => {
    const { products } = useData()
    return (
        <div>
            <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 '>
                <div>
                    <SectionHeading discription={"Don't wait. The time will never be just right."} heading={"Day of "} colorHeading={"The deal"}></SectionHeading>
                </div>
                <div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-12 justify-center'>
                        {
                            products.slice(-5).map(p => <ProductCard product={p}></ProductCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;