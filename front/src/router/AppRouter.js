import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { CartView } from "../components/cart/CartView";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import { Login } from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import { ProductView } from "../components/product/ProductView";
import { ProductsView } from "../components/products/ProductsView";
import RegisterUser from "../components/register/RegisterUser";
import { login, loginAction } from "../features/authSlice";
import { getProducts } from "../features/cartSlice";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  let isLogged = user ? true : false;

  useEffect(() => {
    const userStore = JSON.parse(localStorage.getItem("userTectStore"));
    if (userStore && user === null) {
      //PETICION A BASE DE DATOS PARA VERIFICAR TOKEN VALIDO
      //LUEGO DISPATCH DEL LoginAction

      dispatch(login({ email: userStore.email, password: userStore.password }));
      dispatch(getProducts());
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar isLogged={isLogged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categorieId" element={<ProductsView />} />
        <Route path="/:categorieId/:productId" element={<ProductView />} />

        <Route
          path="/login"
          element={
            /* isLogged ? <Navigate to={"/"} replace={true} /> : */ <Login />
          }
        />

        <Route
          path="/register"
          element={
            isLogged ? <Navigate to={"/"} replace={true} /> : <RegisterUser />
          }
        />

        <Route
          path="/cart"
          element={
            /*   <ProtectedRoute isLogged={isLogged} nav={"/login"}> */
            <CartView />
            /*    </ProtectedRoute> */
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
