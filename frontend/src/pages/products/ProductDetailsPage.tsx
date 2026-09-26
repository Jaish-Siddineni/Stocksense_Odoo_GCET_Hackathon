import {
  Card,
  Typography,
} from "@mui/material";

export default function ProductDetailsPage() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h4">
        Product Details
      </Typography>

      <Typography mt={2}>
        SKU001 - Office Chair
      </Typography>

      <Typography>
        Current Stock: 25
      </Typography>
    </Card>
  );
}