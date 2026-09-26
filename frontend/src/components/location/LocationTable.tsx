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

export default function LocationTable() {
  const [locations, setLocations] =
    useState<any[]>([]);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations =
    async () => {
      const res =
        await api.get(
          "/locations"
        );

      setLocations(
        res.data
      );
    };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Location
            </TableCell>

            <TableCell>
              Code
            </TableCell>

            <TableCell>
              Warehouse
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {locations.map(
            (location) => (
              <TableRow
                key={
                  location.id
                }
              >
                <TableCell>
                  {
                    location.name
                  }
                </TableCell>

                <TableCell>
                  {
                    location.shortCode
                  }
                </TableCell>

                <TableCell>
                  {
                    location
                      .warehouse
                      ?.name
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