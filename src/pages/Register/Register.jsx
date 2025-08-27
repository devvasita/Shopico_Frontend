import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    IconButton,
    InputAdornment,
    CircularProgress,
    Paper,
    Avatar,
} from "@mui/material";
import {
    Close,
    Visibility,
    VisibilityOff,
    CloudUpload,
    Upload,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";


export default function Register() {
    const [passShow, setPassShow] = useState(false);
    const [confirmPassShow, setConfirmPassShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors, isSubmitting, isValid },
        watch,
        trigger,
    } = useForm({
        mode: "all",
    });

    const fileInputRef = useRef(null);

    // To remove uploaded file 
    const handleRemoveFile = () => {
        setPreview(null);
        setValue("image", null);
        trigger();
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };


    // handle api call on submit
    const onSubmit = (data) => {
        const file = data.image;
        console.log("Form Submitted: ", data);
        console.log("Profile Image File:", file);

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setPreview(null);
            reset();
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }, 1000);
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                py: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #2196f3, #21cbf3)",
            }}
        >
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="60vh"
                >
                    <CircularProgress size={60} sx={{ color: "white" }} />
                </Box>
            ) : (
                <Paper
                    elevation={6}
                    sx={{
                        maxWidth: "sm",
                        p: 5,
                        borderRadius: 4,
                        backdropFilter: "blur(6px)",
                        background: "rgba(255,255,255,0.9)",
                    }}
                >
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        gutterBottom
                        align="center"
                        color="primary.main"
                    >
                        Sign Up
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            sx={{
                                mt: 2,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <input
                                accept="image/*"
                                hidden
                                id="upload-image-file"
                                type="file"
                                {...register("image", {
                                    required: "Image is required",
                                    validate: {
                                        lessThan2MB: (file) =>
                                            file.size < 2 * 1024 * 1024 ||
                                            "File size should be < 2MB",
                                        acceptedFormats: (file) =>
                                            ["image/jpeg", "image/png"].includes(file.type) ||
                                            "Only JPG/PNG allowed",
                                    },
                                })}
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setPreview(URL.createObjectURL(file));
                                        setValue("image", file, { shouldValidate: true });
                                    }
                                }}
                                ref={fileInputRef}
                            />

                            {!preview ? (
                                <label
                                    htmlFor="upload-image-file"
                                    style={{ display: "block", cursor: "pointer" }}
                                >
                                    <Box
                                        sx={{
                                            height: 150,
                                            width: 150,
                                            borderRadius: "100%",
                                            border: "5px dashed",
                                            borderColor: "primary.main",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            "&:hover": {
                                                backgroundColor: "rgba(0,0,0,0.05)",
                                            },
                                        }}
                                    >
                                        <Upload sx={{ color: "grey.500" }} />
                                    </Box>
                                </label>
                            ) : <Box
                                mt={2}
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                gap={2}


                            >

                                <Avatar
                                    src={preview}
                                    alt="Preview"
                                    sx={{ width: 150, height: 150, position: "relative" }}
                                />
                                <IconButton
                                    onClick={handleRemoveFile}
                                    color="primary"
                                    size="small"
                                    sx={{
                                        position: "absolute",
                                        left: "60%",
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Close />
                                </IconButton>
                            </Box>}

                            {errors.image && (
                                <Typography color="error" variant="body2" sx={{ mt: 1 }}>
                                    {errors.image.message}
                                </Typography>
                            )}
                        </Box>

                        {/* Name  */}
                        <TextField
                            fullWidth
                            label="Name"
                            size="small"
                            type="text"
                            margin="normal"
                            {...register("name", {
                                required: "name is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Only letters are allowed.",
                                },
                            })}
                            error={Boolean(errors.name)}
                            helperText={errors.name?.message}
                        />

                        {/* Last name */}

                        <TextField
                            fullWidth
                            label="Last Name"
                            type="text"
                            margin="normal"
                            size="small"
                            {...register("lastName", {
                                required: "LastName is required",
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: "Only letters are allowed.",
                                },
                            })}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName?.message}
                        />

                        {/* Email */}
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            margin="normal"
                            size="small"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: "Enter a valid email",
                                },
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
                            size="small"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Min length is 6 characters" },
                                maxLength: {
                                    value: 12,
                                    message: "Max length is 12 Characters",
                                },
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
                            size="small"
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
                            sx={{ mt: 3 }}
                            disabled={!isValid || isSubmitting}
                        >
                            Register
                        </Button>

                        {/* Links */}
                        <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                            Already have an account?{" "}
                            <NavLink
                                to="/login"
                                style={{ color: "primary.main", fontWeight: "bold" }}
                            >
                                Sign In
                            </NavLink>
                        </Typography>
                    </Box>
                </Paper>
            )}
        </Box>
    );
}
