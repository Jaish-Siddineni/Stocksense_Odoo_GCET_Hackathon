import {
  Card,
  Stack,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";
import { api } from "../../services/api";

export default function WarehouseForm() {
  const [name, setName] =
    useState("");

  const [shortCode, setShortCode] =
    useState("");

  const [address, setAddress] =
    useState("");

  const saveWarehouse =
    async () => {
      await api.post(
        "/warehouses",
        {
          name,
          shortCode,
          address,
        }
      );

      setName("");
      setShortCode("");
      setAddress("");
    };

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextField
          label="Warehouse Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <TextField
          label="Short Code"
          value={shortCode}
          onChange={(e) =>
            setShortCode(
              e.target.value
            )
          }
        />

        <TextField
          label="Address"
          value={address}
          onChange={(e) =>
            setAddress(
              e.target.value
            )
          }
        />

        <Button
          variant="contained"
          onClick={
            saveWarehouse
          }
        >
          Save Warehouse
        </Button>
      </Stack>
    </Card>
  );
}