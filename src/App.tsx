import React from 'react';
import logo from './logo.svg';
import * as S from './App.styles';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <S.AppContent>
      <Header />
      <ProductsList />
    </S.AppContent>
  );
}

export default App;
