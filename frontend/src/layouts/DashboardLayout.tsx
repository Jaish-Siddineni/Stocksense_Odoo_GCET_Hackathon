// import {
//   Box,
//   Drawer,
//   List,
//   ListItemButton,
//   ListItemText,
//   Toolbar,
//   Typography,
//   AppBar,
// } from "@mui/material";

// import { Outlet, useNavigate, useLocation } from "react-router-dom";

// const drawerWidth = 240;

// const menuItems = [
//   { label: "Dashboard", path: "/dashboard" },
//   { label: "Receipts", path: "/receipts" },
//   { label: "Deliveries", path: "/deliveries" },
//   { label: "Products", path: "/products" },
//   { label: "Warehouses", path: "/warehouses" },
//   { label: "Locations", path: "/locations" },
//   { label: "Move History", path: "/movements" },
//   { label: "Settings", path: "/settings" },
// ];

// export default function DashboardLayout() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   return (
//     <Box sx={{ display: "flex" }}>
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: 1201,
//           bgcolor: "#0f172a",
//         }}
//       >
//         <Toolbar>
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 700,
//               letterSpacing: 1,
//             }}
//           >
//             StockSense
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,

//           "& .MuiDrawer-paper": {
//             width: drawerWidth,
//             boxSizing: "border-box",
//             borderRight: "1px solid #e5e7eb",
//           },
//         }}
//       >
//         <Toolbar />

//         <List>
//           {menuItems.map((item) => (
//             <ListItemButton
//               key={item.label}
//               selected={location.pathname === item.path}
//               onClick={() => navigate(item.path)}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           ))}
//         </List>
//       </Drawer>

//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 4,
//           bgcolor: "#f8fafc",
//           minHeight: "100vh",
//         }}
//       >
//         <Toolbar />

//         <Outlet />
//       </Box>
//     </Box>
//   );
// }

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
} from "@mui/material";

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const drawerWidth = 240;

const menuItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Receipts", path: "/receipts" },
  { label: "Deliveries", path: "/deliveries" },
  { label: "Products", path: "/products" },
  { label: "Warehouses", path: "/warehouses" },
  { label: "Locations", path: "/locations" },
  { label: "Move History", path: "/movements" },
  { label: "Settings", path: "/settings" },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore((state) => state.user);

  const isManager = user?.role === "INVENTORY_MANAGER";

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: 1201,
          bgcolor: "#0f172a",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            StockSense
          </Typography>
        </Toolbar>
      </AppBar>

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

        <List>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.label}
              selected={location.pathname === item.path}
              onClick={() => navigate(item.path)}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}

          {/* Manager-only menu item */}
          {isManager && (
            <ListItemButton
              selected={location.pathname === "/managers"}
              onClick={() => navigate("/managers")}
            >
              <ListItemText primary="Managers" />
            </ListItemButton>
          )}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 4,
          bgcolor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}