import {
  Grid,
  Card,
  Typography,
  Button,
} from "@mui/material";

import {
  useEffect,
  useState,
} from "react";

import KPIBox from "../../components/dashboard/KPIBox";
import InventoryChart from "../../components/dashboard/InventoryChart";
import RecentActivity from "../../components/dashboard/RecentActivity";

import {
  getDashboardStats,
} from "../../services/dashboardService";

interface DashboardStats {
  products: number;
  receipts: number;
  deliveries: number;
  warehouses: number;
  locations: number;
}

export default function DashboardPage() {
  const [stats, setStats] =
    useState<DashboardStats>({
      products: 0,
      receipts: 0,
      deliveries: 0,
      warehouses: 0,
      locations: 0,
    });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard =
    async () => {
      try {
        const data =
          await getDashboardStats();

        setStats(data);
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <>
      <Typography
        variant="h4"
        mb={3}
        fontWeight={700}
      >
        Inventory Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Products"
            value={stats.products}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Receipts"
            value={stats.receipts}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Deliveries"
            value={stats.deliveries}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Warehouses"
            value={stats.warehouses}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6">
              Inventory Levels
            </Typography>

            <InventoryChart />
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <RecentActivity />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6">
              Receipts
            </Typography>

            <Typography>
              Total Receipts:
              {" "}
              {stats.receipts}
            </Typography>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6">
              Deliveries
            </Typography>

            <Typography>
              Total Deliveries:
              {" "}
              {stats.deliveries}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}