import {
  Card,
  TextField,
  Button,
  Stack,
  Typography,
  Alert,
  Link,
  Divider,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    setError("");

    if (!email) {
      setError(
        "Please enter your email address."
      );
      return;
    }

    /*
      OTP backend is not implemented yet.

      When the backend endpoint is ready,
      this section will call something like:

      await requestPasswordReset(email);
    */

    setSubmitted(true);
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#f8fafc",
        px: 2,
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 420,
          p: 4,
          borderRadius: 3,
        }}
      >
        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography
              variant="h4"
              fontWeight={700}
              color="#0f172a"
            >
              Reset password
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Enter your email to receive a
              password reset code.
            </Typography>
          </Stack>

          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}

          {submitted ? (
            <Alert severity="info">
              Password reset will be available
              once the OTP service is connected.
            </Alert>
          ) : (
            <Stack
              component="form"
              onSubmit={handleSubmit}
              spacing={2}
            >
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  py: 1.3,
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Send reset code
              </Button>
            </Stack>
          )}

          <Divider />

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
          >
            Remember your password?{" "}
            <Link
              component="button"
              type="button"
              underline="hover"
              onClick={() =>
                navigate("/login")
              }
            >
              Back to login
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}