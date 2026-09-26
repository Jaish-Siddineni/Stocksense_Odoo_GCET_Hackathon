import { Box } from "@mui/material";

import Sidebar from "../components/common/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />

      <Box
        sx={{
          flex: 1,
          padding: 3,
          background: "#F8FAFC",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}