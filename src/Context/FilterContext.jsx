import React, { createContext, useState } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <FilterContext.Provider
      value={{ categoryId, setCategoryId, searchQuery, setSearchQuery }}>
      {children}
    </FilterContext.Provider>
  );
};
