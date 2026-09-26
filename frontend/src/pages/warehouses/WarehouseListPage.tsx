import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  Divider,
} from "@mui/material";

import {
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

const drawerWidth = 260;

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Receipts",
    path: "/receipts",
  },
  {
    label: "Deliveries",
    path: "/deliveries",
  },
  {
    label: "Warehouses",
    path: "/warehouses",
  },
  {
    label: "Locations",
    path: "/locations",
  },
  {
    label: "Movements",
    path: "/movements",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

export default function DashboardLayout() {
  const navigate = useNavigate();

  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      {/* TOP NAVBAR */}

      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          zIndex: 1300,
          bgcolor: "#0f172a",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            fontWeight={700}
          >
            StockSense
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Typography variant="body2">
            Inventory Management System
          </Typography>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid #e5e7eb",
          },
        }}
      >
        <Toolbar />

        <Box sx={{ p: 3 }}>
          <Typography
            variant="h5"
            fontWeight={700}
          >
            StockSense
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
          >
            Warehouse Management
          </Typography>
        </Box>

        <Divider />

        <List sx={{ mt: 1 }}>
          {menuItems.map((item) => {
            const isActive =
              location.pathname === item.path;

            return (
              <ListItemButton
                key={item.label}
                onClick={() =>
                  navigate(item.path)
                }
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,

                  bgcolor: isActive
                    ? "#e0e7ff"
                    : "transparent",

                  "&:hover": {
                    bgcolor: "#eef2ff",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      {/* PAGE CONTENT */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f8fafc",
          minHeight: "100vh",
          p: 4,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}