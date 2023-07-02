import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";

axios.defaults.baseURL = import.meta.env.DEV ? "http://localhost:5000" : "/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="product/:slug" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/shipping" element={<ShippingAddressScreen />} />
      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </StoreProvider>
  </React.StrictMode>
);
