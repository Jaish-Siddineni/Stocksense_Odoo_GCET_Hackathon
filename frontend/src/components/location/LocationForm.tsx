import {
  Card,
  Stack,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

import { useState } from "react";

import { v4 as uuid } from "uuid";

import {
  useWarehouseStore,
} from "../../store/warehouseStore";

import {
  useLocationStore,
} from "../../store/locationStore";

export default function LocationForm() {
  const warehouses =
    useWarehouseStore(
      (state) => state.warehouses
    );

  const addLocation =
    useLocationStore(
      (state) => state.addLocation
    );

  const [name, setName] =
    useState("");

  const [shortCode, setShortCode] =
    useState("");

  const [warehouseId, setWarehouseId] =
    useState("");

  const handleSave = () => {
    addLocation({
      id: uuid(),
      name,
      shortCode,
      warehouseId,
    });

    setName("");
    setShortCode("");
    setWarehouseId("");
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextField
          label="Location Name"
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
          select
          label="Warehouse"
          value={warehouseId}
          onChange={(e) =>
            setWarehouseId(
              e.target.value
            )
          }
        >
          {warehouses.map((warehouse) => (
            <MenuItem
              key={warehouse.id}
              value={warehouse.id}
            >
              {warehouse.name}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          onClick={handleSave}
        >
          Save Location
        </Button>
      </Stack>
    </Card>
  );
}