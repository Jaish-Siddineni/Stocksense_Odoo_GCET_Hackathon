import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

import DeliveryStatusBadge from "./DeliveryStatusBadge";

const deliveries = [
  {
    ref: "DEL001",
    customer: "XYZ Pvt Ltd",
    status: "Done",
  },
];

export default function DeliveryTable() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reference</TableCell>

            <TableCell>Customer</TableCell>

            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {deliveries.map((item) => (
            <TableRow key={item.ref}>
              <TableCell>
                {item.ref}
              </TableCell>

              <TableCell>
                {item.customer}
              </TableCell>

              <TableCell>
                <DeliveryStatusBadge
                  status={item.status}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}