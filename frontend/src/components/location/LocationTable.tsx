import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import {
  useLocationStore,
} from "../../store/locationStore";

import {
  useWarehouseStore,
} from "../../store/warehouseStore";

export default function LocationTable() {
  const locations =
    useLocationStore(
      (state) => state.locations
    );

  const warehouses =
    useWarehouseStore(
      (state) => state.warehouses
    );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Location
          </TableCell>

          <TableCell>
            Short Code
          </TableCell>

          <TableCell>
            Warehouse
          </TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {locations.map((location) => {
          const warehouse =
            warehouses.find(
              (w) =>
                w.id ===
                location.warehouseId
            );

          return (
            <TableRow
              key={location.id}
            >
              <TableCell>
                {location.name}
              </TableCell>

              <TableCell>
                {location.shortCode}
              </TableCell>

              <TableCell>
                {warehouse?.name}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}