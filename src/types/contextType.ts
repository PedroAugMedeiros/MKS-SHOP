import { ReactNode } from 'react';
import { Products } from '../interfaces/index';

export type ProductsContextProps = {
  children: ReactNode;
}

export type ProductsContextType = {
  products: Products[],
  // showDetails: boolean;
  // Productselected: Productselected;
  // searchInput: string;
  // typeFilter: string;
  setProducts: (newState: Products[]) => void;
  // setShowDetails: (newState: boolean) => void;
  // setProductselected: (newState: Productselected) => void;
  // setSearchInput: (newState: string) => void;
  // setTypeFilter: (newState: string) => void;
}
