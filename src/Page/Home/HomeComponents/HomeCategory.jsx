import { useContext } from 'react';
import { Link } from "react-router";
import useData from "../../../Hooks/useData";
import { FilterContext } from '../../../Context/FilterContext';


const HomeCategory = () => {
    const {categorys} = useData()
    const { setCategoryId } = useContext(FilterContext);

    return (
        <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-24 '>
           <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 '>
            {categorys.map(category=>(
            <Link to="/shop" onClick={() => setCategoryId(category.id)}>
                <div className='flex hover:scale-110 transition-all hover:duration-500 flex-col items-center text-center bg-gray-100 rounded-md px-8 sm:px-12 md:px-16 py-4 '>
                    <img className='w-12 h-12 mb-3' src={category.image} alt="" />
                    <p className='text-gray-600'>{category.name}</p>
                    <p className='text-xs text-gray-400'>{category.items} Items</p>
                </div>
                </Link>
            ))}
           </div>
        </div>
    );
};

export default HomeCategory;