import {
  Card,
  Typography,
} from "@mui/material";

export default function WarehouseDetailsPage() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h4">
        Warehouse Details
      </Typography>

      <Typography mt={2}>
        Main Warehouse
      </Typography>
    </Card>
  );
}