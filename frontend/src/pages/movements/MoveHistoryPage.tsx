import {
  Card,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const movements = [
  {
    id: "MOV001",
    product: "Office Chair",
    from: "WH001",
    to: "WH002",
    qty: 10,
  },
];

export default function MoveHistoryPage() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="h4"
        mb={3}
      >
        Stock Movements
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Qty</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {movements.map((movement) => (
            <TableRow key={movement.id}>
              <TableCell>{movement.id}</TableCell>
              <TableCell>
                {movement.product}
              </TableCell>
              <TableCell>{movement.from}</TableCell>
              <TableCell>{movement.to}</TableCell>
              <TableCell>{movement.qty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}