import {
  Card,
  Stack,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import { useWarehouseStore } from "../../store/warehouseStore";
import { useLocationStore } from "../../store/locationStore";

export default function LocationForm() {
  const warehouses = useWarehouseStore(
    (state) => state.warehouses
  );

  const addLocation = useLocationStore(
    (state) => state.addLocation
  );

  const [name, setName] = useState("");
  const [shortCode, setShortCode] = useState("");
  const [warehouseId, setWarehouseId] = useState("");

  const handleSave = () => {
    if (
      !name.trim() ||
      !shortCode.trim() ||
      !warehouseId
    ) {
      alert("Please fill all fields");
      return;
    }

    addLocation({
      id: uuid(),
      name: name.trim(),
      shortCode: shortCode.trim(),
      warehouseId,
    });

    setName("");
    setShortCode("");
    setWarehouseId("");
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h6"
        mb={2}
        fontWeight={600}
      >
        Create Location
      </Typography>

      <Stack spacing={2}>
        <TextField
          fullWidth
          label="Location Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <TextField
          fullWidth
          label="Short Code"
          value={shortCode}
          onChange={(e) =>
            setShortCode(e.target.value)
          }
        />

        <TextField
          fullWidth
          select
          label="Warehouse"
          value={warehouseId}
          onChange={(e) =>
            setWarehouseId(e.target.value)
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