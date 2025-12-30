import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TbCurrencyTaka } from "react-icons/tb";
import { useToast } from "../../Components/SharedComponents/ToastContext";
import Modal from "../../Components/SharedComponents/Modal";
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from "../../redux/actions/cartActions.jsx";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const { showToast } = useToast();
  const [showModal, setShowModal] = useState(false);

  const subtotal = cart.reduce((sum, item) => {
    const unit =
      item.unitPrice ??
      (parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0);
    const qty = item.qty ?? 1;
    return sum + unit * qty;
  }, 0);

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 mt-12">
      {showModal && (
        <Modal
          title="Page unavailable"
          message="This page is not available at this moment."
          onClose={() => setShowModal(false)}
        />
      )}
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4">
            {cart.map((item) => {
              const unit =
                item.unitPrice ??
                (parseFloat(String(item.price).replace(/[^0-9.-]+/g, "")) || 0);
              const qty = item.qty ?? 1;
              const lineTotal = unit * qty;

              return (
                <div
                  key={item.id}
                  className="flex items-center border-b border-gray-200 py-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover mr-4 rounded lg:w-16 lg:h-18 "
                  />
                  <div className="grow">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-gray-500">{item.categoryName}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border rounded overflow-hidden">
                        <button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                          -
                        </button>
                        <div className="px-4">{qty}</div>
                        <button
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                          showToast({
                            type: "error",
                            message: "Item removed from cart",
                          });
                        }}
                        className="text-sm text-red-600 hover:underline">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold flex items-center justify-end">
                      {unit.toFixed(2)} <TbCurrencyTaka />
                    </p>
                    <div>
                      <p className="text-gray-500 mt-1 flex items-center justify-end">
                        Total: {lineTotal.toFixed(2)} <TbCurrencyTaka />
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex justify-end">
            <div className="bg-red-600 text-white p-4 rounded shadow w-full sm:w-1/3 flex items-center justify-between">
              <div>
                <p className="text-sm">Order Summary</p>
                <p className="text-lg font-bold">
                  Subtotal: ${subtotal.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-transparent text-white border border-white font-semibold py-2 px-4 rounded transition-transform duration-150 ease-in-out transform hover:scale-105 hover:bg-white/10 active:scale-95 active:bg-white/20 active:translate-y-1 active:shadow-inner focus:outline-none focus:ring-2 focus:ring-white/30">
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
