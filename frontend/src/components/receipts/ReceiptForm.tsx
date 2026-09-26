import {
  Card,
  Stack,
  TextField,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";

import {
  useState,
  useEffect,
} from "react";

import { api } from "../../services/api";

export default function ReceiptForm() {
  const [products, setProducts] =
    useState([]);

  const [productId, setProductId] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  const [supplier, setSupplier] =
    useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts =
    async () => {
      const response =
        await api.get(
          "/products"
        );

      setProducts(
        response.data
      );
    };

  const saveReceipt =
    async () => {
      try {
        await api.post(
          "/receipts",
          {
            productId,
            quantity:
              Number(
                quantity
              ),
            supplier,
          }
        );

        alert(
          "Receipt created"
        );

        setProductId("");
        setQuantity("");
        setSupplier("");
      } catch (error) {
        console.error(error);
      }
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
        >
          {products.map(
            (
              product: any
            ) => (
              <MenuItem
                key={
                  product.id
                }
                value={
                  product.id
                }
              >
                {
                  product.name
                }
              </MenuItem>
            )
          )}
        </TextField>

        <TextField
          type="number"
          label="Quantity"
          value={quantity}
          onChange={(e) =>
            setQuantity(
              e.target.value
            )
          }
        />

        <TextField
          label="Supplier"
          value={supplier}
          onChange={(e) =>
            setSupplier(
              e.target.value
            )
          }
        />

        <Button
          variant="contained"
          onClick={
            saveReceipt
          }
        >
          Save Receipt
        </Button>
      </Stack>
    </Card>
  );
}