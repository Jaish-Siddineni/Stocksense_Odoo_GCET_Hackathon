import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import { useProductStore } from "../../store/productStore";

export default function ProductTable() {
  const products =
    useProductStore(
      (state) => state.products
    );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>SKU</TableCell>

          <TableCell>Name</TableCell>

          <TableCell>Category</TableCell>

          <TableCell>Stock</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
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
              {product.stock}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}