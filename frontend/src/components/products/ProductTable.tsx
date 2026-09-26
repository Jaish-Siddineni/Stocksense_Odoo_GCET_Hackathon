import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Typography,
} from "@mui/material";

import { useProductStore } from "../../store/productStore";

export default function ProductTable() {
  const products =
    useProductStore(
      (state) => state.products
    );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>SKU</strong>
            </TableCell>

            <TableCell>
              <strong>Name</strong>
            </TableCell>

            <TableCell>
              <strong>Category</strong>
            </TableCell>

            <TableCell>
              <strong>Price</strong>
            </TableCell>

            <TableCell>
              <strong>Stock</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
              >
                <Typography
                  color="text.secondary"
                >
                  No products available
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            products.map((product) => (
              <TableRow
                key={product.id}
              >
                <TableCell>
                  {product.sku}
                </TableCell>

                <TableCell>
                  {product.name}
                </TableCell>

                <TableCell>
                  {product.category}
                </TableCell>

                <TableCell>
                  ₹{product.price}
                </TableCell>

                <TableCell>
                  {product.stock}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}