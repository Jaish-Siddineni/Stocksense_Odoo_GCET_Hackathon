import Chip from "@mui/material/Chip";

interface Props {
  status: "Draft" | "Ready" | "Done";
}

export default function ReceiptStatusBadge({
  status,
}: Props) {
  const getColor = () => {
    switch (status) {
      case "Done":
        return "success";

      case "Ready":
        return "primary";

      default:
        return "warning";
    }
  };

  return (
    <Chip
      label={status}
      color={getColor()}
    />
  );
}