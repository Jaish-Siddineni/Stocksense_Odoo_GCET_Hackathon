import {
  Card,
  Stack,
  TextField,
  Button,
} from "@mui/material";

import { useState } from "react";

import { v4 as uuid } from "uuid";

import {
  useWarehouseStore,
} from "../../store/warehouseStore";

export default function WarehouseForm() {
  const addWarehouse =
    useWarehouseStore(
      (state) => state.addWarehouse
    );

  const [name, setName] =
    useState("");

  const [shortCode, setShortCode] =
    useState("");

  const [address, setAddress] =
    useState("");

  const handleSubmit = () => {
    addWarehouse({
      id: uuid(),
      name,
      shortCode,
      address,
    });

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
            setShortCode(e.target.value)
          }
        />

        <TextField
          label="Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save Warehouse
        </Button>
      </Stack>
    </Card>
  );
}