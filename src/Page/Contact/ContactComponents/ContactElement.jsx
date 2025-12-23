import React from 'react';
import SectionHeading from '../../../Components/SharedComponents/SectionHeading';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
const ContactElement = () => {
    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
            <div className='my-12'>
                <div className='flex justify-center text-center mb-4'>
                    <SectionHeading heading={"Contact"} colorHeading={"With Us"} discription={"Customer service should not be a department. It should be the entire company."}></SectionHeading>
                </div>

                <div className='flex flex-wrap justify-center gap-8 '>
                    <div className='border border-gray-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-grow px-8 py-5 rounded-md'>
                        <div className='flex flex-col items-center justify-center'>

                            <div className='text-3xl border p-4 rounded-md my-3 border-gray-200'>
                                <FaPhone />
                            </div>
                            <p className='text-xl font-semibold text-gray-700'>Contact With Phone</p>
                            <h3>Phone: 01753924093</h3>
                            <h3>Phone: 01753924093</h3>
                        </div>
                    </div>
                    <div className='border border-gray-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-grow px-8 py-5 rounded-md'>
                        <div className='flex flex-col items-center justify-center'>

                            <div className='text-3xl border p-4 rounded-md my-3 border-gray-200'>
                                <MdOutlineMail />
                            </div>
                            <p className='text-xl font-semibold text-gray-700'>Contact With Phone</p>
                            <h3>Phone: 01753924093</h3>
                            <h3>Phone: 01753924093</h3>
                        </div>
                    </div>
                    <div className='border border-gray-200 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-grow px-8 py-5 rounded-md'>
                        <div className='flex flex-col items-center justify-center'>

                            <div className='text-3xl border p-4 rounded-md my-3 border-gray-200'>
                                <CiLocationOn />
                            </div>
                            <p className='text-xl font-semibold text-gray-700'>Addresse</p>
                            <h3 className='text-center'>   Ruami Mello Moraes Filho, 987 - Salvador - MA, 40352, Brazil.</h3>

                        </div>
                    </div>
                </div>


                <div className='flex lg:flex-row flex-col justify-center gap-12 items-center my-12'>
                    <div className='w-full lg:w-1/2'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.485100878886!2d90.42419807479249!3d23.765734088188523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754583dd209%3A0xdd0c5fcc7d2d3836!2sBdcalling%20IT%20Ltd.%20-%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1762502803564!5m2!1sen!2sbd" width="100%" height="400" className='rounded-md' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col gap-4 items-start'>
                            <input className='w-full py-2 border border-gray-200 px-3 rounded-md' type="text" placeholder='Your NAme ...' name="" id="" />
                             <input className='w-full py-2 border border-gray-200 px-3 rounded-md' type="text" placeholder='Your Phone ...' name="" id="" />
                              <input className='w-full py-2 border border-gray-200 px-3 rounded-md' type="text" placeholder='Email Address ...' name="" id="" />
                              <input className='w-full py-12 border border-gray-200 px-3 rounded-md' type="text" placeholder='Your Message ...' name="" id="" />

                              <button className='bgp btn text-gray-100'>Submit</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ContactElement;