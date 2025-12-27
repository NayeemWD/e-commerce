import React, { useState, useContext } from "react";
import useData from "../../Hooks/useData";
import ProductCard from "../../Components/SharedComponents/ProductCard";
import { FilterContext } from "../../Context/FilterContext";

const ShopNow = () => {
  const { products, categorys } = useData();
  const { categoryId, setCategoryId, searchQuery, setSearchQuery } =
    useContext(FilterContext);
  const [width, setWidth] = useState(null);

  const handleClick = (categoryId) => {
    setCategoryId((prev) => (prev === categoryId ? null : categoryId)); // toggle
  };

  const handleClickWidth = (w) => {
    setWidth((prev) => (prev === w ? null : w)); // toggle
  };

  const clearFilter = () => {
    setCategoryId(null);
    setWidth(null);
  };

  const filterData = products.filter((p) => {
    // If there's an explicit search query, ignore category/width filters and match by text
    if (searchQuery && String(searchQuery).trim() !== "") {
      const q = String(searchQuery).toLowerCase();
      const q4 = q.slice(0, 4);
      const name = String(p.name).toLowerCase();
      const cat = String(p.categoryName).toLowerCase();
      const desc = String(p.description || "").toLowerCase();
      return (
        name.includes(q) ||
        name.includes(q4) ||
        cat.includes(q) ||
        cat.includes(q4) ||
        desc.includes(q) ||
        desc.includes(q4)
      );
    }

    const matchCategory = categoryId ? p.categoryId === categoryId : true;
    const matchWidth = width ? p.width === width : true;
    return matchCategory && matchWidth;
  });

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 container justify-center  mx-auto px-4 sm:px-8 md:px-2 lg:px-2 mt-12">
        <div className="md:col-span-3 lg:col-span-2 lg:gap-2 ">
          <div className="border border-gray-200 p-3 rounded-md lg:w-50">
            <p className="border-b border-gray-200 pb-3 mb-4 font-semibold text-lg ">
              Category
            </p>
            {categorys.map((category) => (
              <div key={category.id} className="flex gap-2 items-center mb-2">
                <input
                  type="checkbox"
                  checked={categoryId === category.id}
                  readOnly
                  onClick={() => handleClick(category.id)}
                />
                <p
                  className="cursor-pointer select-none"
                  onClick={() => handleClick(category.id)}>
                  {category.name}
                </p>
              </div>
            ))}

            <div className="mt-12">
              <p className="border-b border-gray-200 pb-3 mb-4 font-semibold text-lg">
                Width
              </p>
              {[...new Set(products.map((p) => p.width))].map((w) => (
                <div key={w} className="flex gap-2 items-center mb-2">
                  <input
                    type="checkbox"
                    checked={width === w}
                    readOnly
                    onClick={() => handleClickWidth(w)}
                  />
                  <p
                    onClick={() => handleClickWidth(w)}
                    className="cursor-pointer select-none">
                    {w}
                  </p>
                </div>
              ))}
            </div>

            {(categoryId ||
              width ||
              (searchQuery && searchQuery.trim() !== "")) && (
              <button
                onClick={() => {
                  clearFilter();
                  setSearchQuery("");
                }}
                className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 w-full transition-all">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        <div className="md:col-span-9 lg:col-span-10 ">
          {filterData.length > 0 ? (
            <div className="overflow-auto pr-4 max-h-[4320px] md:max-h-[2520px] lg:max-h-[1260px] ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5  ">
                {filterData.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          ) : (
            <p className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-gray-500 mt-10">
              No products found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
