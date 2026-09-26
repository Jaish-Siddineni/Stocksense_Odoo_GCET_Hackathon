import {
  CircularProgress,
  Box,
} from "@mui/material";

export default function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      p={3}
    >
      <CircularProgress />
    </Box>
  );
}