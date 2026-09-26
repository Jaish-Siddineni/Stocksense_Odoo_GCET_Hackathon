import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/auth/LoginPage";

import DashboardPage from "../pages/dashboard/DashboardPage";

import ProductsPage from "../pages/products/ProductsPage";

import ReceiptListPage from "../pages/receipts/ReceiptListPage";

import DeliveryListPage from "../pages/deliveries/DeliveryListPage";

import WarehouseListPage from "../pages/warehouses/WarehouseListPage";

import LocationListPage from "../pages/locations/LocationListPage";

import MoveHistoryPage from "../pages/movements/MoveHistoryPage";

import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/products"
        element={
          <PrivateRoute>
            <ProductsPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/receipts"
        element={
          <PrivateRoute>
            <ReceiptListPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/deliveries"
        element={
          <PrivateRoute>
            <DeliveryListPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/warehouses"
        element={
          <PrivateRoute>
            <WarehouseListPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/locations"
        element={
          <PrivateRoute>
            <LocationListPage />
          </PrivateRoute>
        }
      />

      <Route
        path="/movements"
        element={
          <PrivateRoute>
            <MoveHistoryPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}