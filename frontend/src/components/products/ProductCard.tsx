import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

interface Props {
  name: string;
  sku: string;
  stock: number;
}

export default function ProductCard({
  name,
  sku,
  stock,
}: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">
          {name}
        </Typography>

        <Typography color="text.secondary">
          {sku}
        </Typography>

        <Chip
          label={`Stock: ${stock}`}
          color={
            stock > 20
              ? "success"
              : stock > 5
              ? "warning"
              : "error"
          }
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
}