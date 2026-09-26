import { Card, Typography } from "@mui/material";

interface Props {
  title: string;
  value: string | number;
}

export default function KPIBox({
  title,
  value
}: Props) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: 4
      }}
    >
      <Typography
        color="text.secondary"
        variant="body2"
      >
        {title}
      </Typography>

      <Typography
        variant="h4"
        fontWeight={700}
      >
        {value}
      </Typography>
    </Card>
  );
}