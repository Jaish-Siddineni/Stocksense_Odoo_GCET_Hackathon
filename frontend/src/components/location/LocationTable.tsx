import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { useLocationStore } from "../../store/locationStore";
import { useWarehouseStore } from "../../store/warehouseStore";

export default function LocationTable() {
  const locations = useLocationStore(
    (state) => state.locations
  );

  const warehouses = useWarehouseStore(
    (state) => state.warehouses
  );

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Location</strong>
            </TableCell>

            <TableCell>
              <strong>Short Code</strong>
            </TableCell>

            <TableCell>
              <strong>Warehouse</strong>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {locations.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={3}
                align="center"
              >
                <Typography
                  color="text.secondary"
                >
                  No locations found
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            locations.map((location) => {
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
                    {warehouse?.name ??
                      "Unknown"}
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}