import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

import { Cart } from "../components/cart/Cart";


import  Home  from "../components/home/Home";

import { Login } from "../components/login/Login";
import Navbar from "../components/navbar/Navbar";
import { ProductView } from "../components/product/ProductView";
import  {ProductsView}  from "../components/products/ProductsView";
import RegisterUser from "../components/register/RegisterUser";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categorieId" element={<ProductsView />} />
        <Route path="/:categorieId/:productId" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
