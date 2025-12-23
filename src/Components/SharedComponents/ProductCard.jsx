import React from "react";
import { FaStar, FaRegHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative group">
      <div className="w-62 overflow-hidden ob h-90 flex flex-col justify-center border border-gray-200 rounded-md items-center">
        <img
          className="w h-48 cursor-pointer hover:scale-110 transition-all hover:duration-500  "
          src={product.image}
          alt=""
        />
        {/* <img
          className="w-72  cursor-pointer hover:scale-110 transition-all hover:duration-500  "
          src="../../assets/image/14.jpg" 
          alt=""
        /> */}

        <div className="absolute top-0 right-0 flex flex-col items-center justify-center gap-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-gray-100 p-2 rounded-full">
            <FaShoppingCart />
          </button>
          <button className="bg-gray-100 p-2 rounded-full">
            <FaRegHeart />
          </button>
          <Link
            to={`/shop/${product.id}`}
            className="bg-gray-100 p-2 rounded-full">
            <FaEye />
          </Link>
        </div>
        <Link to={`/shop/${product.id}`}>
          <div className="p-3 pl-5">
            <p className="text-gray-400">{product.categoryName}</p>
            <h3 className="font-semibold text-gray-700">{product.name}</h3>
            <div className="flex gap-1 py-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex  gap-3 ">
              <p className="cp flex items-center">
                {product.price}
                <TbCurrencyTaka />
              </p>
              <p className="line-through flex items-center text-gray-400">
                {product.mrp} <TbCurrencyTaka />
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
