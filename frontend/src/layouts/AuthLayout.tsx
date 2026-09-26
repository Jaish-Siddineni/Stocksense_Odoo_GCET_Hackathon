import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e293b,#334155)"
      }}
    >
      <Outlet />
    </Box>
  );
}