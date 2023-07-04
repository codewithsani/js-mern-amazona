import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import App from "./App.jsx";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import ProductScreen from "./screens/ProductScreen.jsx";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import { StoreProvider } from "./Store";
import CartScreen from "./screens/CartScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";
import ShippingAddressScreen from "./screens/ShippingAddressScreen";
import PaymentMethodScreen from "./screens/PaymentMethodScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import OrderHistoryScreen from "./screens/OrderHistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import DashboardScreen from "./screens/DashboardScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import UserListScreen from "./screens/UserListScreen";

axios.defaults.baseURL = import.meta.env.DEV ? "http://localhost:5000" : "/";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<HomeScreen />} />
      <Route path="product/:slug" element={<ProductScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/search" element={<SearchScreen />} />
      <Route path="/signin" element={<SigninScreen />} />
      <Route path="/signup" element={<SignupScreen />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfileScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/placeorder"
        element={
          <ProtectedRoute>
            <PlaceOrderScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/order/:id"
        element={
          <ProtectedRoute>
            <OrderScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orderhistory"
        element={
          <ProtectedRoute>
            <OrderHistoryScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/shipping"
        element={
          <ProtectedRoute>
            <ShippingAddressScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment"
        element={
          <ProtectedRoute>
            <PaymentMethodScreen />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <AdminRoute>
            <DashboardScreen />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <AdminRoute>
            <OrderListScreen />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <UserListScreen />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminRoute>
            <ProductListScreen />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/product/:id"
        element={
          <AdminRoute>
            <ProductEditScreen />
          </AdminRoute>
        }
      />

      {/* <Route path="dashboard" element={<Dashboard />} /> */}
      {/* ... etc. */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider>
      <PayPalScriptProvider deferLoading={true}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </PayPalScriptProvider>
    </StoreProvider>
  </React.StrictMode>
);
