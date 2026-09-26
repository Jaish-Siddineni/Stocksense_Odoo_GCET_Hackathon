import {
  Typography,
  Button,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import DeliveryTable from "../../components/deliveries/DeliveryTable";

export default function DeliveryListPage() {
  const navigate = useNavigate();

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4">
          Deliveries
        </Typography>

        <Button
          variant="contained"
          onClick={() =>
            navigate("/deliveries/create")
          }
        >
          New Delivery
        </Button>
      </Stack>

      <DeliveryTable />
    </>
  );
}