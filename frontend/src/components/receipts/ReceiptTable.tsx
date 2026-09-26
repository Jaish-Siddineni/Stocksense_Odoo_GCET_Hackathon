import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import { api } from "../../services/api";

export default function ReceiptTable() {
  const [receipts, setReceipts] =
    useState([]);

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts =
    async () => {
      try {
        const response =
          await api.get(
            "/receipts"
          );

        setReceipts(
          response.data
        );
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Product
            </TableCell>

            <TableCell>
              Quantity
            </TableCell>

            <TableCell>
              Supplier
            </TableCell>

            <TableCell>
              Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {receipts.map(
            (
              receipt: any
            ) => (
              <TableRow
                key={
                  receipt.id
                }
              >
                <TableCell>
                  {
                    receipt.product
                      ?.name
                  }
                </TableCell>

                <TableCell>
                  {
                    receipt.quantity
                  }
                </TableCell>

                <TableCell>
                  {
                    receipt.supplier
                  }
                </TableCell>

                <TableCell>
                  {new Date(
                    receipt.receiptDate
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}