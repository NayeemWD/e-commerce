import React from "react";
import useData from "../../Hooks/useData";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";
import { TbCurrencyTaka } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "./ToastContext";
import { addToCart } from "../../redux/actions/cartActions.jsx";

const SingleProductPage = () => {
  const { id } = useParams();
  const { products } = useData();
  const findProducts = products.find((p) => p.id == id);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { showToast } = useToast();

  const handleAddToCart = () => {
    if (!findProducts) return;
    const exists = cart.find((i) => i.id === findProducts.id);
    if (exists) {
      showToast({
        type: "warning",
        message: "Item already in cart — update qty from Cart",
      });
      return;
    }
    dispatch(addToCart(findProducts));
    showToast({ type: "success", message: "Added to cart" });
  };

  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row items-center gap-8 m-12 px-8 justify-center">
          <img
            className="w-full max-w-md md:w-96 rounded-md object-cover"
            src={findProducts?.image}
            alt=""
          />
          {/* <img className="w-120 rounded-md" src="../../assets/image/12.jpg" alt="" /> */}
          <div>
            <p className="ts">{findProducts?.categoryName}</p>
            <h3 className="text-4xl font-semibold">{findProducts?.name}</h3>
            <div className="flex items-center gap-12">
              <div className="flex gap-1 py-2 text-orange-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div>
                <p className="ts">Total Rating : {findProducts?.ratings}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 text-lg sm:text-2xl items-start sm:items-center">
              <p className="flex items-center justify-start text-base sm:text-lg">
                Price : <TbCurrencyTaka /> {findProducts?.price}
              </p>
              <p className="line-through text-gray-400 flex items-center justify-start text-sm sm:text-base">
                <TbCurrencyTaka /> {findProducts?.mrp}
              </p>
            </div>
            <div>
              <p className="ts mb-4">{findProducts?.description}</p>
              <p className="font-semibold">
                SKU :{" "}
                <span className="font-normal text-gray-600">
                  {findProducts?.sku}
                </span>
              </p>
              <p className="font-semibold">
                Stock:{" "}
                <span className="font-normal text-gray-600">
                  {findProducts?.stock}
                </span>
              </p>
              <p className="font-semibold">
                Closure :{" "}
                <span className="font-normal text-gray-600">
                  {findProducts?.closure}
                </span>
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <p className="font-semibold mr-3 my-4">Size : </p>
              {findProducts?.weightOptions.map((w) => (
                <div key={w}>
                  <p>
                    <span className="font-normal text-gray-600 btn btn-xs sm:btn-sm px-2 py-1">
                      {w}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 my-4">
 
              <div className="w-full sm:w-auto">
                <button
                  onClick={handleAddToCart}
                  disabled={!findProducts}
                  className="btn w-full sm:w-auto bgp text-gray-100 disabled:opacity-50">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <SectionHeading
          heading={"Top Rted"}
          colorHeading={"Seleing Products"}
          discription={
            "High-quality denim jeans for men with a comfortable"
          }></SectionHeading>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 my-12">
          {products.slice(0, 5).map((p) => (
            <ProductCard product={p} key={p.id}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
