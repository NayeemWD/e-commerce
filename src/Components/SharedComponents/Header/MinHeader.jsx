import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "../../../assets/image/logo1.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { FilterContext } from "../../../Context/FilterContext";

const MinHeader = () => {
  const cart = useSelector((state) => state.cart.cart);
  const { setCategoryId, setSearchQuery } = useContext(FilterContext);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const submitSearch = (val) => {
    const v = String(val || term).trim();
    if (!v) return;
    setLoading(true);
    // clear category filter and set search query then navigate
    setCategoryId(null);
    setSearchQuery(v);
    // keep the search term visible in the input
    setTerm(v);
    navigate("/shop");
    // stop loading after navigation (short fallback)
    setTimeout(() => setLoading(false), 800);
  };

  return (
    <div>
      <div className="flex flex-wrap items-center py-2 justify-between container  mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <NavLink className={({ isActive }) => (isActive ? `cp` : ``)} to="/">
          <img className="w-16 md:w-24" src={logo} alt="" />
        </NavLink>

        <div className="lg:w-md md:w-auto order-3 md:order-2 mt-4 md:mt-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitSearch();
            }}
            className="w-full">
            <label className="input w-full flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                type="search"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    submitSearch(e.target.value);
                  }
                }}
                className="w-full md:max-w-2xl lg:max-w-3xl"
                placeholder="Search . . ."
              />
              <button
                type="button"
                onClick={() => submitSearch(term)}
                disabled={loading}
                className="ml-2 btn bg-[#5CAF90] text-white btn-sm flex items-center gap-2">
                {loading ? (
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                ) : (
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                )}
                <span className="hidden sm:inline">Search</span>
              </button>
            </label>
          </form>
        </div>

        <div className="flex gap-5 order-2 md:order-3">
          <div className="flex items-center gap-1">
            <CiUser className="text-3xl" />
            <div className="hidden md:block">
              {/* <p className="ct text-xs">Account</p> */}
              <div className=" gap-2">
                <Link to="/login" className="ts">
                  LOGIN
                  <span> /</span> <br />
                  {/* <p className="ts">/</p> */}
                </Link>
                <Link to="/register" className="ts">
                  REGISTER
                </Link>
              </div>
            </div>
          </div>
          <Link to="/cart" className="flex items-center gap-1 relative">
            <CiShoppingCart className="text-3xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cart.length}
              </span>
            )}
            <div className="hidden md:block">
              {/* <p className="ct text-xs">Add TO</p> */}
              <p className="ts">Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MinHeader;
