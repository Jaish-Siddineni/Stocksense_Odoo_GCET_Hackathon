import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

export default function DeliveryTable() {
  const [deliveries, setDeliveries] =
    useState<any[]>([]);

  useEffect(() => {
    loadDeliveries();
  }, []);

  const loadDeliveries = async () => {
    const res =
      await api.get("/deliveries");

    setDeliveries(res.data);
  };

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              Customer
            </TableCell>

            <TableCell>
              Product
            </TableCell>

            <TableCell>
              Quantity
            </TableCell>

            <TableCell>
              Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {deliveries.map(
            (delivery) => (
              <TableRow
                key={delivery.id}
              >
                <TableCell>
                  {delivery.customer}
                </TableCell>

                <TableCell>
                  {
                    delivery.product
                      ?.name
                  }
                </TableCell>

                <TableCell>
                  {
                    delivery.quantity
                  }
                </TableCell>

                <TableCell>
                  {new Date(
                    delivery.deliveryDate
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Paper>
  );
}