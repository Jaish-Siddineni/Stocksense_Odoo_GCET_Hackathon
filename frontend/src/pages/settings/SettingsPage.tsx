import {
  Card,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { useState } from "react";

export default function SettingsPage() {
  const [companyName, setCompanyName] =
    useState("");

  const [adminEmail, setAdminEmail] =
    useState("");

  const saveSettings = () => {
    localStorage.setItem(
      "stocksense_settings",
      JSON.stringify({
        companyName,
        adminEmail,
      })
    );

    alert("Settings Saved");
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h4" mb={3}>
        Settings
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Company Name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(e.target.value)
          }
        />

        <TextField
          label="Admin Email"
          value={adminEmail}
          onChange={(e) =>
            setAdminEmail(e.target.value)
          }
        />

        <Button
          variant="contained"
          onClick={saveSettings}
        >
          Save Settings
        </Button>
      </Stack>
    </Card>
  );
}