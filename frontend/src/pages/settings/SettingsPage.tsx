import {
  Card,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";

export default function SettingsPage() {
  return (
    <Card sx={{ p: 4 }}>
      <Typography variant="h5" mb={3}>
        Settings
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Company Name"
          defaultValue="StockSense"
        />

        <TextField
          label="Admin Email"
          defaultValue="admin@stocksense.com"
        />

        <Button variant="contained">
          Save Settings
        </Button>
      </Stack>
    </Card>
  );
}