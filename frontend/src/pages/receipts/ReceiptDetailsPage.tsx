import {
  Card,
  Typography,
} from "@mui/material";

import {
  useParams,
} from "react-router-dom";

import {
  useReceiptStore,
} from "../../store/receiptStore";

export default function ReceiptDetailsPage() {
  const { id } =
    useParams();

  const receipt =
    useReceiptStore(
      (state) =>
        state.receipts.find(
          (r) => r.id === id
        )
    );

  if (!receipt) {
    return (
      <Typography>
        Receipt not found
      </Typography>
    );
  }

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h5">
        Receipt Details
      </Typography>

      <Typography>
        Product ID:
        {" "}
        {receipt.productId}
      </Typography>

      <Typography>
        Quantity:
        {" "}
        {receipt.quantity}
      </Typography>

      <Typography>
        Supplier:
        {" "}
        {receipt.supplier}
      </Typography>

      <Typography>
        Date:
        {" "}
        {new Date(
          receipt.receiptDate
        ).toLocaleDateString()}
      </Typography>
    </Card>
  );
}