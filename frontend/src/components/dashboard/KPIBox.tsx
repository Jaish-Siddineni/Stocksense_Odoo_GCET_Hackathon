import { Card, Typography } from "@mui/material";

export default function KPIBox({
  title,
  value,
}: {
  title: string;

  value: number;
}) {
  return (
    <Card
      sx={{
        padding: 3,
        borderRadius: 4,
      }}
    >
      <Typography color="gray">
        {title}
      </Typography>

      <Typography variant="h4">
        {value}
      </Typography>
    </Card>
  );
}