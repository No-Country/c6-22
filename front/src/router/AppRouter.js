import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import { Cart } from "../components/cart/Cart";
import { Home } from "../components/home/Home";
import { Login } from "../components/login/Login";
import { ProductView } from "../components/product/ProductView";
import { ProductsView } from "../components/products/ProductsView";
import { Register } from "../components/register/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categorieId" element={<ProductsView />} />
        <Route path="/:categorieId/:productId" element={<ProductView />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};
