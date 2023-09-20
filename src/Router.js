import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import ProductList from './pages/ProductList/ProductList';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Payment from './pages/Payment/Payment';
import ProductDetailHome from './components/ProductDetailHome/ProductDetailHome';
import ProductImagesContent from './components/ProductImagesContent/ProductImagesContent';
import LeftImages from './components/ProductImagesContent/ImagesContent/LeftImages';
import RightImages from './components/ProductImagesContent/ImagesContent/RightImages';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nav" element={<Nav />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/productdetailhome" element={<ProductDetailHome />} />
        <Route path="/leftImages" element={<LeftImages />} />
        <Route path="/rightImages" element={<RightImages />} />
        <Route
          path="/productImagesContent"
          element={<ProductImagesContent />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/nav" element={<Nav />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
