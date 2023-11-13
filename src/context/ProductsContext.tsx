import React, { createContext, useState } from 'react';
import { ProductsContextType, ProductsContextProps } from '../types';
import { Products } from '../interfaces/index';

const initialValue = {
  products: [],
//   showDetails: false,
//   productselected: {
//     id: '0',
//     url: ''
//   },
//   searchInput: '',
//   typeFilter: '',
  setProducts: () => [],
//   setShowDetails: (newState: boolean) => newState,
//   setproductselected: (newState: productselected) => newState,
//   setSearchInput: (newState: string) => newState,
//   setTypeFilter: (newState: string) => newState,
};

export const ProductsContext = createContext<ProductsContextType>(initialValue);

export const ProductsContextProvider = ({ children }: ProductsContextProps) => {
  const [products, setProducts] = useState<Products[]>(initialValue.products)
//   const [showDetails, setShowDetails] = useState(initialValue.showDetails)
//   const [productselected, setproductselected] = useState<productselected>(initialValue.productselected)
//   const [searchInput, setSearchInput] = useState(initialValue.searchInput)
//   const [typeFilter, setTypeFilter] = useState(initialValue.typeFilter)

  const contextValue = {
    products, setProducts
    // products, setproducts, typeFilter, setTypeFilter,
    // searchInput, setSearchInput, productselected, showDetails, setShowDetails, setproductselected
  }

  return (
    <ProductsContext.Provider value={contextValue}> {children}</ProductsContext.Provider>
  )
};