import {
  Card,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Movement {
  id: string;
  productId: string;
  movementType: string;
  quantity: number;
  referenceId: string;
  createdAt: string;
}

export default function MoveHistoryPage() {
  const [movements, setMovements] =
    useState<Movement[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchMovements();
  }, []);

  const fetchMovements = async () => {
    try {
      const res =
        await api.get("/movements");

      setMovements(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <CircularProgress />;

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

            <TableCell>
              Type
            </TableCell>

            <TableCell>
              Quantity
            </TableCell>

            <TableCell>
              Reference
            </TableCell>

            <TableCell>
              Date
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {movements.map(
            (movement) => (
              <TableRow
                key={movement.id}
              >
                <TableCell>
                  {movement.id}
                </TableCell>

                <TableCell>
                  {
                    movement.movementType
                  }
                </TableCell>

                <TableCell>
                  {
                    movement.quantity
                  }
                </TableCell>

                <TableCell>
                  {
                    movement.referenceId
                  }
                </TableCell>

                <TableCell>
                  {new Date(
                    movement.createdAt
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Card>
  );
}