import {
  Card,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function SettingsPage() {
  const [companyName, setCompanyName] =
    useState("");

  const [adminEmail, setAdminEmail] =
    useState("");

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const res =
        await api.get("/settings");

      if (res.data) {
        setCompanyName(
          res.data.companyName || ""
        );

        setAdminEmail(
          res.data.adminEmail || ""
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveSettings = async () => {
    try {
      await api.post("/settings", {
        companyName,
        adminEmail,
      });

      alert("Settings saved");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h4"
        mb={3}
      >
        Settings
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Company Name"
          value={companyName}
          onChange={(e) =>
            setCompanyName(
              e.target.value
            )
          }
        />

        <TextField
          label="Admin Email"
          value={adminEmail}
          onChange={(e) =>
            setAdminEmail(
              e.target.value
            )
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