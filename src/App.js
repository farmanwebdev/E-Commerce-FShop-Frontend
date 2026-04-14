import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/actions/products-actions";
import { authActions } from "./store/auth-slice";
import { AnimatePresence } from "framer-motion";

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CheckoutConfirmation from './pages/CheckoutConfirmation';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from './pages/NotFound';
import MainNavigation from "./layout/MainNavigation";
import Footer from "./layout/Footer";
import Notification from "./components/Notification";
import Dashboard from "./pages/dashboard/Dashboard";
import TheProducts from "./components/dashboard/TheProducts";
import AddProduct from "./components/dashboard/AddProduct";
import UpdateProducts from "./components/dashboard/UpdateProducts";
import ProductUpdate from "./components/dashboard/ProductUpdate";
import OrdersManagement from "./components/dashboard/OrdersManagement";

import LoginRedirect from "./components/auth/LoginRedirect";
import RegisterRedirect from "./components/auth/RegisterRedirect";
import DashboardRedirect from "./components/auth/DashboardRedirect";
import HomeRedirect from "./components/auth/HomeRedirect";
// import { SpeedInsights } from "@vercel/speed-insights/react"





const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const isAdmin = useSelector((state) => state.auth.isAdmin);
  // const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProducts());
    
    // Restore authentication state from localStorage
    const token = localStorage.getItem('token');
    const userString = localStorage.getItem('user');
    
    if (token && userString) {
      try {
        const user = JSON.parse(userString);
        dispatch(authActions.restoreAuth({ user, token }));
      } catch (error) {
        console.error('Error restoring auth state:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }
  }, [dispatch]);

  
  return (
    <>
      <Notification />
      {!isAdmin && <MainNavigation />}
      <AnimatePresence mode='wait' >

        <Routes location={location} key={location.pathname}>

          <Route element={<HomeRedirect />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-confirmation" element={<CheckoutConfirmation />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Route>

          <Route element={<LoginRedirect />}>
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<RegisterRedirect />}>
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route element={<DashboardRedirect />}>
            <Route path="admin/dashboard" element={<Dashboard />}>
              <Route path="products" element={<TheProducts />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="updateproducts">
                <Route index element={<UpdateProducts />} />
                <Route path=":productId" element={<ProductUpdate />} />
              </Route>
              <Route path="orders" element={<OrdersManagement />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />

        </Routes>

      </AnimatePresence>
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;
