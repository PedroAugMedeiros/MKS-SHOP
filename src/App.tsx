import './App.css'
import * as S from './App.styles';
import Header from './components/Header';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <div className='App'>
    <S.AppContent>
      <Header />
      <ProductsList />
    </S.AppContent>
    </div>
  );
}

export default App;
