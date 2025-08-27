import React, { useState } from "react";
import {
    Box,
    Button,
    Container,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    CircularProgress,
    Paper
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function ForgotPassword() {

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, isValid },
    } = useForm(
        {
            mode: 'all'
        }
    );

    const onSubmit = (data) => {
        console.log("Form Submitted: ", data);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000); // demo loader
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #2196f3, #21cbf3)" // 💙 gradient
            }}
        >
            <Container maxWidth="sm">
                {loading ? (
                    <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                        <CircularProgress size={60} sx={{ color: "white" }} />
                    </Box>
                ) : (
                    <Paper
                        elevation={6}
                        sx={{
                            p: 5,
                            borderRadius: 4,
                            backdropFilter: "blur(6px)",
                            background: "rgba(255,255,255,0.9)" // semi-transparent white
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            gutterBottom
                            align="center"
                            color="primary.main"
                        >
                            Forgot Password
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                            {/* Email */}
                            <TextField
                                fullWidth
                                label="Email"
                                type="email"
                                margin="normal"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^@]+@[^@]+\.[^@]+$/,
                                        message: "Enter a valid email"
                                    }
                                })}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />



                            {/* Submit Button */}
                            <Button
                                fullWidth
                                variant="contained"
                                type="submit"
                                size="large"
                                sx={{
                                    mt: 3
                                }}
                                disabled={!isValid || isSubmitting}
                            >
                                Submit
                            </Button>

                        </Box>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
