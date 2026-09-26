import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

import ReceiptStatusBadge from "./ReceiptStatusBadge";

const rows = [
  {
    id: "REC001",
    vendor: "Steel Supplier",
    status: "Done",
  },
  {
    id: "REC002",
    vendor: "ABC Traders",
    status: "Ready",
  },
];

export default function ReceiptTable() {
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reference</TableCell>

            <TableCell>Vendor</TableCell>

            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>

              <TableCell>{row.vendor}</TableCell>

              <TableCell>
                <ReceiptStatusBadge
                  status={row.status as any}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}