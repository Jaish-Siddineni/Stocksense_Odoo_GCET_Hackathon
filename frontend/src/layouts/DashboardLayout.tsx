import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  AppBar
} from "@mui/material";

import { Outlet, useNavigate } from "react-router-dom";

const drawerWidth = 240;

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Receipts", path: "/receipts" },
  { label: "Deliveries", path: "/deliveries" },
  { label: "Products", path: "/products" },
  { label: "Warehouses", path: "/warehouses" },
  { label: "Locations", path: "/locations" },
  { label: "Move History", path: "/move-history" },
  { label: "Settings", path: "/settings" }
];

export default function DashboardLayout() {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          bgcolor: "#0f172a"
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            StockSense
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          "& .MuiDrawer-paper": {
            width: drawerWidth
          }
        }}
      >
        <Toolbar />

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "#f8fafc",
          minHeight: "100vh"
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}