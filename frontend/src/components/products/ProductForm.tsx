import {
  Card,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useState } from "react";

import { v4 as uuid } from "uuid";

import { useProductStore } from "../../store/productStore";

export default function ProductForm() {
  const addProduct =
    useProductStore(
      (state) => state.addProduct
    );

  const [name, setName] =
    useState("");

  const [sku, setSku] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [price, setPrice] =
    useState("");

  const saveProduct = () => {
    addProduct({
      id: uuid(),
      name,
      sku,
      category,
      stock: 0,
      price: Number(price),
    });

    setName("");
    setSku("");
    setCategory("");
    setPrice("");
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