import {
  Card,
  TextField,
  Button,
  Stack,
  Typography,
  Alert,
  Link,
  Divider,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../services/authService";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleRegister = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    setError("");

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError(
        "Please fill in all fields."
      );
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      password !== confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
      });

      navigate("/login", {
        state: {
          message:
            "Registration successful. Please log in.",
        },
      });
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Registration failed. Please try again.";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        backgroundColor: "#f8fafc",
        px: 2,
        py: 4,
      }}
    >
      <Card
        elevation={3}
        sx={{
          width: "100%",
          maxWidth: 440,
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
              Create account
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Set up your StockSense account
            </Typography>
          </Stack>

          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}

          <Stack
            component="form"
            onSubmit={handleRegister}
            spacing={2}
          >
            <TextField
              label="Full name"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              fullWidth
              required
            />

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

            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={(event) =>
                setPassword(event.target.value)
              }
              fullWidth
              required
            />

            <TextField
              label="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(
                  event.target.value
                )
              }
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              disabled={loading}
              sx={{
                py: 1.3,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              {loading ? (
                <CircularProgress
                  size={24}
                  color="inherit"
                />
              ) : (
                "Create account"
              )}
            </Button>
          </Stack>

          <Divider />

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
          >
            Already have an account?{" "}
            <Link
              component="button"
              type="button"
              underline="hover"
              onClick={() =>
                navigate("/login")
              }
            >
              Sign in
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}