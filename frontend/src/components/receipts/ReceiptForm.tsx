import {
  TextField,
  Button,
  Stack,
  Card,
  Typography,
} from "@mui/material";

export default function ReceiptForm() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Create Receipt
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Vendor"
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
          Save Receipt
        </Button>
      </Stack>
    </Card>
  );
}