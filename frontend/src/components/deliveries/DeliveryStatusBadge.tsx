import Chip from "@mui/material/Chip";

interface Props {
  status: string;
}

export default function DeliveryStatusBadge({
  status,
}: Props) {
  return (
    <Chip
      label={status}
      color={
        status === "Done"
          ? "success"
          : "warning"
      }
    />
  );
}