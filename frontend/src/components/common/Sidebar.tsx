import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { Link } from "react-router-dom";

const menu = [
  { label: "Dashboard", path: "/" },

  { label: "Products", path: "/products" },

  { label: "Receipts", path: "/receipts" },

  { label: "Deliveries", path: "/deliveries" },

  { label: "Warehouses", path: "/warehouses" },

  { label: "Locations", path: "/locations" },

  { label: "Move History", path: "/movements" },
];

export default function Sidebar() {
  return (
    <Drawer variant="permanent">
      <List sx={{ width: 240 }}>
        {menu.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
}