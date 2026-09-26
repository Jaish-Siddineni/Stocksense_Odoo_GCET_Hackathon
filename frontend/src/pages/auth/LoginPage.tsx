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

import { loginUser } from "../../services/authService";
import { useAuthStore } from "../../store/authStore";

export default function LoginPage() {
  const navigate = useNavigate();

  const setAuth =
    useAuthStore((state) => state.setAuth);

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async (
    event: React.FormEvent
  ) => {
    event.preventDefault();

    setError("");

    if (!email || !password) {
      setError(
        "Please enter your email and password."
      );
      return;
    }

    try {
      setLoading(true);

      const data = await loginUser({
        email,
        password,
      });

      setAuth(
        data.token,
        data.user
      );

      navigate("/dashboard");
    } catch (error: any) {
      const message =
        error?.response?.data?.message ||
        "Login failed. Please check your credentials.";

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
              Welcome back
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Sign in to your StockSense account
            </Typography>
          </Stack>

          {error && (
            <Alert severity="error">
              {error}
            </Alert>
          )}

          <Stack
            component="form"
            onSubmit={handleLogin}
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

            <Stack
              direction="row"
              justifyContent="flex-end"
            >
              <Link
                component="button"
                type="button"
                underline="hover"
                onClick={() =>
                  navigate(
                    "/forgot-password"
                  )
                }
              >
                Forgot password?
              </Link>
            </Stack>

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
                "Login"
              )}
            </Button>
          </Stack>

          <Divider />

          <Typography
            variant="body2"
            textAlign="center"
            color="text.secondary"
          >
            Don't have an account?{" "}
            <Link
              component="button"
              type="button"
              underline="hover"
              onClick={() =>
                navigate("/register")
              }
            >
              Create one
            </Link>
          </Typography>
        </Stack>
      </Card>
    </Stack>
  );
}