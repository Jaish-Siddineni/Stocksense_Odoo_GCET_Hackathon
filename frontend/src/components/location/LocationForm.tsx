import {
  Card,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  Box,
} from "@mui/material";

import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Movement {
  id: string;
  productId: string;
  movementType: string;
  quantity: number;
  referenceId?: string;
  createdAt: string;
}

export default function MoveHistoryPage() {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovements();
  }, []);

  const fetchMovements = async () => {
    try {
      const res = await api.get("/movements");

      if (Array.isArray(res.data)) {
        setMovements(res.data);
      } else {
        console.error(
          "Expected array but received:",
          res.data
        );
        setMovements([]);
      }
    } catch (error) {
      console.error(
        "Error fetching movements:",
        error
      );
      setMovements([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        p={4}
      >
        <CircularProgress />
      </Box>
    );
  }

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
            <TableCell>Product ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Reference</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {movements.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={6}
                align="center"
              >
                No stock movements found
              </TableCell>
            </TableRow>
          ) : (
            movements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>
                  {movement.id}
                </TableCell>

                <TableCell>
                  {movement.productId}
                </TableCell>

                <TableCell>
                  {movement.movementType}
                </TableCell>

                <TableCell>
                  {movement.quantity}
                </TableCell>

                <TableCell>
                  {movement.referenceId || "-"}
                </TableCell>

                <TableCell>
                  {new Date(
                    movement.createdAt
                  ).toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </Card>
  );
}