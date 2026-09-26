import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import { api } from "../../services/api";

export default function WarehouseTable() {
  const [warehouses, setWarehouses] =
    useState<any[]>([]);

  useEffect(() => {
    loadWarehouses();
  }, []);

  const loadWarehouses =
    async () => {
      const res =
        await api.get(
          "/warehouses"
        );

      setWarehouses(
        res.data
      );
    };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Name
            </TableCell>

            <TableCell>
              Code
            </TableCell>

            <TableCell>
              Address
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {warehouses.map(
            (warehouse) => (
              <TableRow
                key={
                  warehouse.id
                }
              >
                <TableCell>
                  {
                    warehouse.name
                  }
                </TableCell>

                <TableCell>
                  {
                    warehouse.shortCode
                  }
                </TableCell>

                <TableCell>
                  {
                    warehouse.address
                  }
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}