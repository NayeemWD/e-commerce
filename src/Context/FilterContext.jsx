import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [categoryId, setCategoryId] = useState(null);

    return (
        <FilterContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </FilterContext.Provider>
    );
};
