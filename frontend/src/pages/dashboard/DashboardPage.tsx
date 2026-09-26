import { Grid } from "@mui/material";

import MainLayout from "../../layouts/MainLayout";

import KPIBox from "../../components/dashboard/KPIBox";

export default function DashboardPage() {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <KPIBox
            title="Products"
            value={248}
          />
        </Grid>

        <Grid item xs={3}>
          <KPIBox
            title="Receipts"
            value={14}
          />
        </Grid>

        <Grid item xs={3}>
          <KPIBox
            title="Deliveries"
            value={8}
          />
        </Grid>

        <Grid item xs={3}>
          <KPIBox
            title="Warehouses"
            value={5}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
}