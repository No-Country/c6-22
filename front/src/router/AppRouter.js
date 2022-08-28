import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cart } from "../components/cart/Cart";
import Contact from "../components/contact/Contact";
import Home from "../components/home/Home";
import { Login } from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import { ProductView } from "../components/product/ProductView";
import { ProductsView } from "../components/products/ProductsView";
import RegisterUser from "../components/register/RegisterUser";
import { loginAction } from "../features/authSlice";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  let isLogged = user ? true : false;

  useEffect(() => {
    const userStore = JSON.parse(localStorage.getItem("userTectStore"));
    if (userStore && user === null) {
      const { token } = userStore;
      //PETICION A BASE DE DATOS PARA VERIFICAR TOKEN VALIDO
      //LUEGO DISPATCH DEL LoginAction

      dispatch(loginAction({ email: "ale@ale.com", password: "123aleA" }));
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

        <Route path="/register"  element={isLogged ? <Navigate to={"/"} replace={true} /> : <RegisterUser />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute isLogged={isLogged} nav={"/login"}>
              <Cart />
            </ProtectedRoute>
          } 
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
