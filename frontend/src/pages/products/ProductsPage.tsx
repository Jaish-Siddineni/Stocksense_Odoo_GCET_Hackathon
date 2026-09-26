import {
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import ProductTable from "../../components/products/ProductTable";

export default function ProductsPage() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4">
          Products
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate("/products/create")
          }
        >
          Add Product
        </Button>
      </Stack>

      <ProductTable />
    </>
  );
}