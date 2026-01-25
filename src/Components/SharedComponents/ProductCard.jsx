import React from "react";
import { FaStar, FaRegHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";
import { useNavigate, Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions.jsx";
import { useToast } from "./ToastContext";
import { AuthContext } from "../../Context/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { showToast } = useToast();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (!user) {
      Swal.fire({
        title: 'Please Login',
        text: 'You need to login to add items to the cart.',
        icon: 'warning',
        confirmButtonText: 'Login'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
      return;
    }

    const exists = cart.find((i) => i.id === product.id);
    if (exists) {
      showToast({
        type: "warning",
        message: "Item already in cart",
      });
      return;
    }

    dispatch(addToCart(product));
    showToast({ type: "success", message: "Added to cart" });
  };

  return (
    <div className="relative group ">
      <div className="w-full box-border overflow-hidden h-auto   flex flex-col justify-betwee border border-gray-200 rounded-md lg:gap-0 items-center bg-white shadow-sm min-h-[360px] md:min-h-[380px]">
        <div className="w-full h-48 md:h-56 lg:h-56 p-3 flex items-center justify-center overflow-hidden rounded-t-md">
          <img
            className="max-h-full max-w-full object-contain"
            src={product.image}
            alt=""
          />
        </div>


        <div className="absolute  top-0 right-0 flex flex-col items-center justify-center gap-2 p-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
          <div className="p-4 w-full flex-1">
            <p className="text-gray-400 text-sm md:text-base lg:text-sm">
              {product.categoryName}
            </p>
            <h3
              className="font-semibold text-gray-700 text-sm md:text-base  lg:text-md"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}>
              {product.name}
            </h3>
            <div className="flex gap-1 py-2 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <div className="flex gap-3 items-center">
              <p className="cp flex items-center text-sm md:text-base">
                {product.price}
                <TbCurrencyTaka />
              </p>
              <p className="line-through flex items-center text-gray-400 text-xs md:text-sm">
                {product.mrp} <TbCurrencyTaka />
              </p>
            </div>
          </div>
        </Link>
        {/* Mobile action bar */}
        <div className="w-full p-3 sm:hidden flex items-center justify-between">
          <div className="text-sm font-semibold">
            {product.price} <TbCurrencyTaka />
          </div>
          <button
            onClick={() => handleAddToCart(product)}
            className="bgp text-white py-2 px-3 rounded-md">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
