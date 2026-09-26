import {
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import ReceiptTable from "../../components/receipts/ReceiptTable";

export default function ReceiptListPage() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4">
          Receipts
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate("/receipts/create")
          }
        >
          New Receipt
        </Button>
      </Stack>

      <ReceiptTable />
    </>
  );
}