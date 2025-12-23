import React from 'react';

const SectionHeading = ({heading,colorHeading, discription}) => {
    return (
        <div>
            <div>
                <h3 className='text-2xl sm:text-3xl md:text-4xl text-gray-700 font-semibold'>{heading} <span className='cp'>{colorHeading}</span></h3>
                <p className='ts'>{discription}</p>
            </div>
        </div>
    );
};

export default SectionHeading;