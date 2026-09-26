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

import {
  useEffect,
  useState,
} from "react";

import { api } from "../../services/api";

interface Product {
  id: string;
  sku: string;
  name: string;
  category: string;
  price: number;
  stock: number;
}

export default function ProductTable() {
  const [products, setProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts =
    async () => {
      try {
        const response =
          await api.get("/products");

        setProducts(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>SKU</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Stock</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={5}
                align="center"
              >
                <Typography>
                  No products available
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            products.map(
              (product) => (
                <TableRow
                  key={
                    product.id
                  }
                >
                  <TableCell>
                    {
                      product.sku
                    }
                  </TableCell>

                  <TableCell>
                    {
                      product.name
                    }
                  </TableCell>

                  <TableCell>
                    {
                      product.category
                    }
                  </TableCell>

                  <TableCell>
                    ₹
                    {
                      product.price
                    }
                  </TableCell>

                  <TableCell>
                    {
                      product.stock
                    }
                  </TableCell>
                </TableRow>
              )
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}