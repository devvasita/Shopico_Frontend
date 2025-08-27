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

export default function SignInPage() {
    const [passShow, setPassShow] = useState(false);
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
                            Sign In
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

                            {/* Password */}
                            <TextField
                                fullWidth
                                label="Password"
                                type={passShow ? "text" : "password"}
                                margin="normal"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Min length is 6 characters" },
                                    maxLength: {
                                        value: 12, message: "Max length is 12 Characters"
                                    }
                                })}
                                error={Boolean(errors.password)}
                                helperText={errors.password?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton onClick={() => setPassShow(!passShow)}>
                                                {passShow ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
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
                                Login
                            </Button>

                            {/* Links */}
                            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                                Don't have an account?{" "}
                                <NavLink to="/register" style={{ color: "primary.main", fontWeight: "bold" }}>
                                    Sign Up
                                </NavLink>
                            </Typography>
                            <Typography variant="body2" align="center" sx={{ mt: 1, fontWeight: "bold" }}>
                                Forgot Password?{" "}
                                <NavLink to="/forgotpassword" style={{ color: "primary.main" }}>
                                    Click Here
                                </NavLink>
                            </Typography>
                        </Box>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
