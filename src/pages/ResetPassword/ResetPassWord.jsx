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

export default function ResetPassWord() {
    const [passShow, setPassShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [confirmPassShow, setConfirmPassShow] = useState(false);

    const {
        watch,
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
                            Reset Your Password
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit(onSubmit)}>

                            {/* Password */}
                            <TextField
                                fullWidth
                                label="Enter New Password"
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


                            {/* Confirm Password */}
                            <TextField
                                fullWidth
                                label="Confirm Password"
                                type={confirmPassShow ? "text" : "password"}
                                margin="normal"
                                {...register("confirmPassword", {
                                    required: "Confirm Password is required",
                                    validate: (value) =>
                                        value === watch('password') || "Passwords do not match",
                                })}
                                error={Boolean(errors.confirmPassword)}
                                helperText={errors.confirmPassword?.message}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setConfirmPassShow(!confirmPassShow)}
                                            >
                                                {confirmPassShow ? <VisibilityOff /> : <Visibility />}
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
                                Reset Password
                            </Button>


                        </Box>
                    </Paper>
                )}
            </Container>
        </Box>
    );
}
