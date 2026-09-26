import {
  Card,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useState } from "react";

import { api } from "../../services/api";

export default function ProductForm() {
  const [name, setName] =
    useState("");

  const [sku, setSku] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const saveProduct = async () => {
    try {
      await api.post("/products", {
        name,
        sku,
        category,
        price: Number(price),
        stock: 0,
      });

      alert("Product created");

      setName("");
      setSku("");
      setCategory("");
      setPrice("");

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Failed to create product");
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <TextField
          label="SKU"
          value={sku}
          onChange={(e) =>
            setSku(e.target.value)
          }
        />

        <TextField
          label="Category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        />

        <TextField
          label="Price"
          type="number"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
        />

        <Button
          variant="contained"
          onClick={saveProduct}
        >
          Save Product
        </Button>
      </Stack>
    </Card>
  );
}