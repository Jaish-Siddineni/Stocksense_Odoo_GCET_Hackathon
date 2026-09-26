import { useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { api } from "../../services/api";

const ManagersPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreate = async () => {
        try {
            await api.post("/managers", {
                name,
                email,
                password,
            });

            alert("Manager created successfully");

            setName("");
            setEmail("");
            setPassword("");
        } catch (error: any) {
            alert(
                error?.response?.data?.message ||
                "Failed to create manager"
            );
        }
    };

    return (
        <Box>
            <Typography variant="h4" fontWeight={700} mb={3}>
                Manage Managers
            </Typography>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <Stack spacing={2}>
                        <TextField
                            label="Manager Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />

                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />

                        <Button
                            variant="contained"
                            onClick={handleCreate}
                        >
                            Create Manager
                        </Button>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ManagersPage;