import { Box, Typography, Paper } from "@mui/material";

import LocationForm from "../../components/location/LocationForm";
import LocationTable from "../../components/location/LocationTable";

export default function LocationListPage() {
  return (
    <Box>
      <Typography
        variant="h4"
        fontWeight={700}
        mb={3}
      >
        Locations
      </Typography>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 3,
        }}
      >
        <LocationForm />
      </Paper>

      <Paper
        elevation={1}
        sx={{
          p: 3,
          borderRadius: 3,
        }}
      >
        <LocationTable />
      </Paper>
    </Box>
  );
}