import {
  Card,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";

export default function DeliveryForm() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h5"
        mb={2}
      >
        Create Delivery
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Customer"
          fullWidth
        />

        <TextField
          label="Reference"
          fullWidth
        />

        <TextField
          label="Product"
          fullWidth
        />

        <TextField
          label="Quantity"
          type="number"
          fullWidth
        />

        <Button variant="contained">
          Save Delivery
        </Button>
      </Stack>
    </Card>
  );
}