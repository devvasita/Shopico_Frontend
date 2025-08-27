import React from "react";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Divider,
    Grid,
    Typography,
    Paper
} from "@mui/material";
import ProfileImg from '../../assets/profile.png';

export default function UserProfile() {
    const user = {
        firstname: "John Doe",
        email: "john.doe@example.com",
        userprofile: ProfileImg
    };

    const userOrderData = [1, 2, 3, 4]; // dummy orders

    const handleOrders = () => {
        alert("See Orders clicked!");
    };

    return (
        <Box sx={{ mt: 5, mb: 5, px: 2 }}>
            <Card sx={{ p: 3, borderRadius: 4, boxShadow: 3 }}>
                <Grid container spacing={0} alignItems="stretch">
                    {/* Left Profile Section */}
                    <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            bgcolor: "primary.main",
                            color: "primary.contrastText",
                            borderRadius: { xs: "12px 12px 0 0", md: "12px 0 0 12px" }, // rounded corners
                            p: 3
                        }}
                    >
                        <Avatar
                            src={user?.userprofile}
                            alt={user?.firstname}
                            sx={{ width: 120, height: 120, mb: 2 }}
                        />
                        <Typography variant="h5" fontWeight="bold">
                            {user?.firstname}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            UI Developer
                        </Typography>
                    </Grid>

                    {/* Right Info Section */}
                    <Grid size={{ xs: 12, md: 8 }}>
                        <CardContent sx={{
                            height: "100%",
                            bgcolor: "grey.100", // try grey.50 or primary.light
                            borderRadius: { xs: "0 0 12px 12px", md: "0 12px 12px 0" }
                        }}>
                            {/* Information */}
                            <Typography variant="h6" gutterBottom letterSpacing={1} textTransform={'uppercase'}>
                                Information
                            </Typography>
                            <Paper variant="outlined" sx={{ p: 2, borderRadius: 2, mb: 3 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Email
                                </Typography>
                                <Typography variant="body1">{user?.email}</Typography>
                            </Paper>

                            <Divider sx={{ my: 2 }} />

                            {/* Orders */}
                            <Typography variant="h6" gutterBottom>
                                Orders
                            </Typography>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <Paper variant="outlined" sx={{ p: 2, borderRadius: 2 }}>
                                        <Typography variant="subtitle2" color="text.secondary">
                                            Total Orders : <Box component={'span'} fontWeight={'bold'}>
                                                {userOrderData?.length || 0}

                                            </Box>
                                        </Typography>
                                    </Paper>
                                </Grid>

                                <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", alignItems: "center" }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        onClick={handleOrders}
                                        sx={{ borderRadius: 2, py: 1.5 }}
                                    >
                                        See Orders
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
}
