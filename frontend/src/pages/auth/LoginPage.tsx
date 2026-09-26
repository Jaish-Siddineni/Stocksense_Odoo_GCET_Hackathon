import {
  Card,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card
        sx={{
          width: 400,
          padding: 4,
        }}
      >
        <Stack spacing={2}>
          <TextField label="Email" />

          <TextField
            label="Password"
            type="password"
          />

          <Button
            variant="contained"
            fullWidth
          >
            Login
          </Button>
        </Stack>
      </Card>
    </Stack>
  );
}