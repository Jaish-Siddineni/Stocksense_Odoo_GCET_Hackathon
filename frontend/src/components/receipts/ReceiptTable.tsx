import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

import {
  useReceiptStore,
} from "../../store/receiptStore";

import {
  useProductStore,
} from "../../store/productStore";

export default function ReceiptTable() {
  const receipts =
    useReceiptStore(
      (state) => state.receipts
    );

  const products =
    useProductStore(
      (state) => state.products
    );

  if (
    receipts.length === 0
  ) {
    return (
      <Typography>
        No receipts found.
      </Typography>
    );
  }

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
            (receipt) => {
              const product =
                products.find(
                  (p) =>
                    p.id ===
                    receipt.productId
                );

              return (
                <TableRow
                  key={receipt.id}
                >
                  <TableCell>
                    {product?.name ??
                      "Deleted Product"}
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
              );
            }
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}