import {
  Typography,
  Button,
  Stack,
} from "@mui/material";

import {
  useNavigate,
} from "react-router-dom";

import ReceiptForm from "../../components/receipts/ReceiptForm";

export default function CreateReceiptPage() {
  const navigate =
    useNavigate();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4">
          Create Receipt
        </Typography>

        <Button
          variant="outlined"
          onClick={() =>
            navigate("/receipts")
          }
        >
          Back
        </Button>
      </Stack>

      <ReceiptForm />
    </>
  );
}