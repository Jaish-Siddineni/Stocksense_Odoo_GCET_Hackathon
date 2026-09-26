import { Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

import DashboardLayout from "../layouts/DashboardLayout";

/* Auth */
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";

/* Dashboard */
import DashboardPage from "../pages/dashboard/DashboardPage";

/* Products */
import ProductsPage from "../pages/products/ProductsPage";
import ProductCreatePage from "../pages/products/ProductCreatePage";
import ProductEditPage from "../pages/products/ProductEditPage";
import ProductDetailsPage from "../pages/products/ProductDetailsPage";

/* Receipts */
import ReceiptListPage from "../pages/receipts/ReceiptListPage";
import CreateReceiptPage from "../pages/receipts/CreateReceiptPage";
import ReceiptDetailsPage from "../pages/receipts/ReceiptDetailsPage";

/* Deliveries */
import DeliveryListPage from "../pages/deliveries/DeliveryListPage";
import CreateDeliveryPage from "../pages/deliveries/CreateDeliveryPage";
import DeliveryDetailsPage from "../pages/deliveries/DeliveryDetailsPage";

/* Warehouses */
import WarehouseListPage from "../pages/warehouses/WarehouseListPage";
import CreateWarehousePage from "../pages/warehouses/CreateWarehousePage";
import WarehouseDetailsPage from "../pages/warehouses/WarehouseDetailsPage";

/* Locations */
import LocationListPage from "../pages/locations/LocationListPage";
import CreateLocationPage from "../pages/locations/CreateLocationPage";
import LocationDetailsPage from "../pages/locations/LocationDetailsPage";

/* Movements */
import MoveHistoryPage from "../pages/movements/MoveHistoryPage";

/* Settings */
import SettingsPage from "../pages/settings/SettingsPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Auth Routes */}

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/forgot-password"
        element={<ForgotPasswordPage />}
      />

      {/* Protected Routes */}

      <Route
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        {/* Dashboard */}

        <Route path="/" element={<DashboardPage />} />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        {/* Products */}

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/products/create"
          element={<ProductCreatePage />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetailsPage />}
        />

        <Route
          path="/products/:id/edit"
          element={<ProductEditPage />}
        />

        {/* Receipts */}

        <Route
          path="/receipts"
          element={<ReceiptListPage />}
        />

        <Route
          path="/receipts/create"
          element={<CreateReceiptPage />}
        />

        <Route
          path="/receipts/:id"
          element={<ReceiptDetailsPage />}
        />

        {/* Deliveries */}

        <Route
          path="/deliveries"
          element={<DeliveryListPage />}
        />

        <Route
          path="/deliveries/create"
          element={<CreateDeliveryPage />}
        />

        <Route
          path="/deliveries/:id"
          element={<DeliveryDetailsPage />}
        />

        {/* Warehouses */}

        <Route
          path="/warehouses"
          element={<WarehouseListPage />}
        />

        <Route
          path="/warehouses/create"
          element={<CreateWarehousePage />}
        />

        <Route
          path="/warehouses/:id"
          element={<WarehouseDetailsPage />}
        />

        {/* Locations */}

        <Route
          path="/locations"
          element={<LocationListPage />}
        />

        <Route
          path="/locations/create"
          element={<CreateLocationPage />}
        />

        <Route
          path="/locations/:id"
          element={<LocationDetailsPage />}
        />

        {/* Movements */}

        <Route
          path="/movements"
          element={<MoveHistoryPage />}
        />

        {/* Settings */}

        <Route
          path="/settings"
          element={<SettingsPage />}
        />
      </Route>

      {/* Fallback */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}