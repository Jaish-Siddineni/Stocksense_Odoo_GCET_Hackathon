import {
  Card,
  Stack,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Product {
  id: string;
  name: string;
}

export default function DeliveryForm() {
  const [products, setProducts] = useState<Product[]>([]);

  const [productId, setProductId] =
    useState("");

  const [customer, setCustomer] =
    useState("");

  const [quantity, setQuantity] =
    useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res =
      await api.get("/products");

    setProducts(res.data);
  };

  const saveDelivery = async () => {
    await api.post("/deliveries", {
      productId,
      customer,
      quantity: Number(quantity),
    });

    setProductId("");
    setCustomer("");
    setQuantity("");
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Create Delivery
      </Typography>

      <Stack spacing={2}>
        <TextField
          label="Customer"
          value={customer}
          onChange={(e) =>
            setCustomer(e.target.value)
          }
        />

        <TextField
          select
          label="Product"
          value={productId}
          onChange={(e) =>
            setProductId(e.target.value)
          }
        >
          {products.map((p) => (
            <MenuItem
              key={p.id}
              value={p.id}
            >
              {p.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={(e) =>
            setQuantity(e.target.value)
          }
        />

        <Button
          variant="contained"
          onClick={saveDelivery}
        >
          Save Delivery
        </Button>
      </Stack>
    </Card>
  );
}