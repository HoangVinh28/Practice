import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Categories from './pages/Categories';
import Product from './pages/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Categories />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
