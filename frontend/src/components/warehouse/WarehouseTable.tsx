import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  useWarehouseStore,
} from "../../store/warehouseStore";

export default function WarehouseTable() {
  const warehouses =
    useWarehouseStore(
      (state) => state.warehouses
    );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>

          <TableCell>
            Short Code
          </TableCell>

          <TableCell>
            Address
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {warehouses.map((warehouse) => (
          <TableRow
            key={warehouse.id}
          >
            <TableCell>
              {warehouse.name}
            </TableCell>

            <TableCell>
              {warehouse.shortCode}
            </TableCell>

            <TableCell>
              {warehouse.address}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}