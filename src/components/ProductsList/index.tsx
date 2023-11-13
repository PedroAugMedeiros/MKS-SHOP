import React, { useContext, useState } from 'react';
import * as S from './index.styles'
import { Products } from '../../interfaces/index';
import ProductCard from '../../components/ProductCard';
import { useApi } from '../../hooks/useApi';
import { API } from '../../services/api';
import { ProductsContext } from '../../context/ProductsContext';

export default function ProductsList() {
  const { products } = useContext(ProductsContext);


  const renderProducts = () => {
    return products && products.map((product: { url: string; id: string; name: string; }) => {
      return (
        <ProductCard product={product}/>
      )
    })
  }
  
  return (
    <S.ProductsList>
      {renderProducts()}
    </S.ProductsList>
  )
}
