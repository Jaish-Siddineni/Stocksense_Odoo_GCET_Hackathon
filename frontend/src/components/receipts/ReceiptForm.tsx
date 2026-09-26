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

import {
  useProductStore,
} from "../../store/productStore";

import {
  useReceiptStore,
} from "../../store/receiptStore";

export default function ReceiptForm() {
  const products =
    useProductStore(
      (state) => state.products
    );

  const updateStock =
    useProductStore(
      (state) => state.updateStock
    );

  const addReceipt =
    useReceiptStore(
      (state) => state.addReceipt
    );

  const [productId, setProductId] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [supplier, setSupplier] =
    useState("");

  const saveReceipt = () => {
    if (
      !productId ||
      !quantity ||
      !supplier
    ) {
      alert(
        "Please fill all fields"
      );
      return;
    }

    const qty =
      Number(quantity);

    addReceipt({
      id: uuid(),
      productId,
      quantity: qty,
      supplier,
      receiptDate:
        new Date().toISOString(),
    });

    updateStock(
      productId,
      qty
    );

    setProductId("");
    setQuantity("");
    setSupplier("");
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h6"
        mb={2}
      >
        Create Receipt
      </Typography>

      <Stack spacing={2}>
        <TextField
          select
          label="Product"
          value={productId}
          onChange={(e) =>
            setProductId(
              e.target.value
            )
          }
          fullWidth
        >
          {products.map(
            (product) => (
              <MenuItem
                key={product.id}
                value={product.id}
              >
                {product.name}
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              e.target.value
            )
          }
          fullWidth
        />

        <TextField
          label="Supplier"
          value={supplier}
          onChange={(e) =>
            setSupplier(
              e.target.value
            )
          }
          fullWidth
        />

        <Button
          variant="contained"
          onClick={saveReceipt}
        >
          Save Receipt
        </Button>
      </Stack>
    </Card>
  );
}