import {
  Grid,
  Card,
  Typography,
  Button
} from "@mui/material";

import KPIBox from "../../components/dashboard/KPIBox";
import InventoryChart from "../../components/dashboard/InventoryChart";
import RecentActivity from "../../components/dashboard/RecentActivity";

export default function DashboardPage() {
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
            value={248}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Receipts"
            value={14}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Deliveries"
            value={8}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <KPIBox
            title="Warehouses"
            value={4}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card
            sx={{
              p: 3,
              borderRadius: 4
            }}
          >
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
              4 To Receive
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 2 }}
            >
              View Receipts
            </Button>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6">
              Deliveries
            </Typography>

            <Typography>
              4 To Deliver
            </Typography>

            <Button
              variant="contained"
              sx={{ mt: 2 }}
            >
              View Deliveries
            </Button>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}