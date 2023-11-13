import React from 'react'
import * as S from './index.styles';
import CartIconSVG from '../../../icons/CartIcon.svg';

export default function CartButton() {
  let cartCount = 0;
  return (
    <S.CartButton><img src={ CartIconSVG }/> <S.CartCounter>{cartCount}</S.CartCounter></S.CartButton>
  )
}