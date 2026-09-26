import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Alert,
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { api } from "../../services/api";

interface Delivery {
    id: string;
    productId: string;
    quantity: number;
    customer: string;
    deliveryDate: string;
    createdAt: string;
}

interface Product {
    id: string;
    name: string;
    sku: string;
    category: string;
    price: number;
    stock: number;
}

const DeliveryDetailsPage = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [delivery, setDelivery] = useState<Delivery | null>(null);
    const [product, setProduct] = useState<Product | null>(null);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchDelivery = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await api.get(`/deliveries/${id}`);

                const deliveryData = response.data;
                setDelivery(deliveryData);

                // Fetch the related product
                if (deliveryData.productId) {
                    try {
                        const productResponse = await api.get(
                            `/products/${deliveryData.productId}`
                        );

                        setProduct(productResponse.data);
                    } catch {
                        // Product information is optional for displaying the delivery.
                        setProduct(null);
                    }
                }
            } catch (err) {
                console.error("Failed to fetch delivery:", err);

                setError("Unable to load delivery details.");
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchDelivery();
        }
    }, [id]);

    const formatDate = (date: string) => {
        if (!date) return "-";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    const formatDateTime = (date: string) => {
        if (!date) return "-";

        return new Date(date).toLocaleString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <Box
                sx={{
                    minHeight: "70vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (error || !delivery) {
        return (
            <Box sx={{ p: 3 }}>
                <Button
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/deliveries")}
                    sx={{ mb: 3 }}
                >
                    Back to Deliveries
                </Button>

                <Alert severity="error">
                    {error || "Delivery not found."}
                </Alert>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                p: { xs: 2, md: 4 },
                backgroundColor: "#f8fafc",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={2}
                sx={{ mb: 4 }}
            >
                <Box>
                    <Button
                        startIcon={<ArrowBackIcon />}
                        onClick={() => navigate("/deliveries")}
                        sx={{
                            mb: 1.5,
                            color: "#64748b",
                            textTransform: "none",
                        }}
                    >
                        Back to Deliveries
                    </Button>

                    <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box
                            sx={{
                                width: 48,
                                height: 48,
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#e0f2fe",
                                color: "#0284c7",
                            }}
                        >
                            <LocalShippingIcon />
                        </Box>

                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    color: "#0f172a",
                                }}
                            >
                                Delivery Details
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: "#64748b", mt: 0.5 }}
                            >
                                Delivery ID: {delivery.id}
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Stack>

            {/* Main Information */}
            <Grid container spacing={3}>
                {/* Delivery Information */}
                <Grid item xs={12} md={8}>
                    <Card
                        elevation={0}
                        sx={{
                            border: "1px solid #e2e8f0",
                            borderRadius: 3,
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    color: "#0f172a",
                                    mb: 3,
                                }}
                            >
                                Delivery Information
                            </Typography>

                            <Grid container spacing={3}>
                                {/* Product */}
                                <Grid item xs={12} sm={6}>
                                    <InfoItem
                                        icon={<Inventory2Icon />}
                                        label="Product"
                                        value={product?.name || delivery.productId}
                                    />

                                    {product?.sku && (
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                display: "block",
                                                color: "#64748b",
                                                mt: 0.5,
                                                ml: 5,
                                            }}
                                        >
                                            SKU: {product.sku}
                                        </Typography>
                                    )}
                                </Grid>

                                {/* Quantity */}
                                <Grid item xs={12} sm={6}>
                                    <InfoItem
                                        icon={<Inventory2Icon />}
                                        label="Quantity"
                                        value={`${delivery.quantity} units`}
                                    />
                                </Grid>

                                {/* Customer */}
                                <Grid item xs={12} sm={6}>
                                    <InfoItem
                                        icon={<PersonIcon />}
                                        label="Customer"
                                        value={delivery.customer}
                                    />
                                </Grid>

                                {/* Delivery Date */}
                                <Grid item xs={12} sm={6}>
                                    <InfoItem
                                        icon={<CalendarMonthIcon />}
                                        label="Delivery Date"
                                        value={formatDate(delivery.deliveryDate)}
                                    />
                                </Grid>
                            </Grid>

                            <Divider sx={{ my: 3 }} />

                            {/* Created At */}
                            <Box>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "#64748b",
                                        mb: 0.5,
                                    }}
                                >
                                    Record Created
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 600,
                                        color: "#334155",
                                    }}
                                >
                                    {formatDateTime(delivery.createdAt)}
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Summary */}
                <Grid item xs={12} md={4}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 3,
                            borderRadius: 3,
                            border: "1px solid #e2e8f0",
                            backgroundColor: "#ffffff",
                        }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "#0f172a",
                                mb: 3,
                            }}
                        >
                            Delivery Summary
                        </Typography>

                        <Box
                            sx={{
                                p: 2.5,
                                borderRadius: 2,
                                backgroundColor: "#f0f9ff",
                                border: "1px solid #bae6fd",
                                mb: 2,
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#0369a1",
                                    mb: 1,
                                }}
                            >
                                Items Delivered
                            </Typography>

                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    color: "#0c4a6e",
                                }}
                            >
                                {delivery.quantity}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{ color: "#0369a1" }}
                            >
                                units
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                p: 2.5,
                                borderRadius: 2,
                                backgroundColor: "#f8fafc",
                                border: "1px solid #e2e8f0",
                            }}
                        >
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "#64748b",
                                    mb: 1,
                                }}
                            >
                                Customer
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontWeight: 600,
                                    color: "#0f172a",
                                }}
                            >
                                {delivery.customer}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

interface InfoItemProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const InfoItem = ({
    icon,
    label,
    value,
}: InfoItemProps) => {
    return (
        <Stack direction="row" spacing={1.5} alignItems="center">
            <Box
                sx={{
                    width: 38,
                    height: 38,
                    borderRadius: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#f1f5f9",
                    color: "#475569",
                    flexShrink: 0,
                }}
            >
                {icon}
            </Box>

            <Box>
                <Typography
                    variant="caption"
                    sx={{
                        display: "block",
                        color: "#64748b",
                        mb: 0.3,
                    }}
                >
                    {label}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        fontWeight: 600,
                        color: "#0f172a",
                    }}
                >
                    {value || "-"}
                </Typography>
            </Box>
        </Stack>
    );
};

export default DeliveryDetailsPage;